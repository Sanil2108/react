import * as React from 'react';

export default function withDraggable(Component) {
    return class DraggableComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                xTranslation: 0,
                yTranslation: 0,
                translating: false,
                originalX: null,
                originalY: null,
            }

            this.mouseMoveListener = this.mouseMoveListener.bind(this);
        }

        setTranslatePosition(x, y) {
            this.setState({
                xTranslation: x - this.state.originalX,
                yTranslation: y - this.state.originalY,
            });
        }

        mouseMoveListener(mouseMoveEvent) {
            if (!this.state.originalX) {
                this.setState({
                    originalX: mouseMoveEvent.clientX,
                    originalY: mouseMoveEvent.clientY,
                });
                return;
            }
            this.setTranslatePosition(mouseMoveEvent.clientX, mouseMoveEvent.clientY);
        }

        enableDragging(event) {
            event.persist();
            this.setState({
                translating: true,
            }, () => {
                event.target.addEventListener('mousemove', this.mouseMoveListener);
            });
        }

        disableDragging(event) {
            event.persist();
            this.setState({
                translating: false,
            });
            event.target.removeEventListener('mousemove', this.mouseMoveListener);
        }

        render() {
            return <div onMouseDown={this.enableDragging.bind(this)} onMouseUp={this.disableDragging.bind(this)} style={{
                cursor: 'pointer',
                transform: `translate(${this.state.xTranslation}px, ${this.state.yTranslation}px)`,
                display: 'inline-block'
            }}>
                <Component
                    enableDragging={this.enableDragging.bind(this)}
                    disableDragging={this.disableDragging.bind(this)}
                    {...this.props}
                ></Component>
            </div>
        }
    }
}
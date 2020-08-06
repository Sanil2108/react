import React from 'react';

export default function withLoader(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                loadedContent: null
            };
        }

        componentDidMount() {
            // Actually load the content
            setTimeout(() => {
                this.setState({ loadedContent: this.props.source })
            }, 2000);
        }

        render() {
            return (
                (this.state.loadedContent) ?
                    <WrappedComponent
                        {...this.props}
                        loadedContent={this.state.loadedContent}
                    ></WrappedComponent> :
                    <div>Your content is being loaded</div>
            );
        }
    }
}
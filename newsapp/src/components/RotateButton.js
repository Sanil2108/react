import * as React from 'react';

export default class RotateButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rotationAngle: 0,
            rotating: this.props.startRotation,
        }
    }

    render() {
        if (this.props.startRotation) {
            const scope = this;
            this.intervalId = setInterval(
                function temp() {
                    const newRotationAngle = scope.state.rotationAngle + (scope.props.rotationAngle / (scope.props.time * 1000 / 16))
                    if (newRotationAngle >= scope.props.rotationAngle) {
                        scope.setState({
                            rotating: false,
                            rotationAngle: scope.props.rotationAngle,
                        })
                        clearInterval(scope.intervalId);
                    }
                    else {
                        scope.setState({
                            rotationAngle: newRotationAngle
                        })
                    }
                }, 16
            )
        }
        return (
            <div>
                <div className={"RotateButton"} style={{"transform": `rotate(${this.state.rotationAngle}deg)`, "transformOrigin": "50% 50%"}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
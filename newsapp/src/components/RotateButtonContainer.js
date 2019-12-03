import * as React from 'react';
import RotateButton from './RotateButton';

export default class RotateButtonContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "rotating": false,
        };
    }

    startRotating() {
        this.setState({
            "rotating": true,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.startRotating.bind(this)}>Start rotating</button>
                <RotateButton startRotation={this.state.rotating} time="10" rotationAngle="180">Hello</RotateButton>
            </div>
        )
    }
}
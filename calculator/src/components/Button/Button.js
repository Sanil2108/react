import * as React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            text: props.text
        }

        console.log(this);
        console.log(this.state);
    }

    render() {
        return (
        <div className="Button" type={this.state.type}>{this.state.text}</div>
        )
    }
}
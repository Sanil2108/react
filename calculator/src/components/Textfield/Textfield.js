import * as React from 'react';

export default class TextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "132"
        };
    }

    render() {
        return (
            <div className = "TextField"> <div style={{'verticalAlign': 'bottom', 'display': 'inline'}}>{this.state.value} </div></div>
        );
    }
}
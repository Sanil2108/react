import * as React from 'react';

export default class RowComponent extends React.Component {
    render() {
        const element = (<tr> <td style={{color:'red'}}>{this.props.name}</td><td>{this.props.age}</td> </tr>);

        return element;
    }
}
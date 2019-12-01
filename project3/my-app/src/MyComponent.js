import * as React from 'react';

export default class MyComponent extends React.Component {
    render() {
        return (<h1> Hello {this.props.name} </h1>);
    }
}
import * as React from 'react';
import RowComponent from './RowComponent';

export default class TableComponent extends React.Component{
    render() {
        let elementA = <RowComponent name={this.props.name1} age={this.props.age1}></RowComponent>
        let elementB = <RowComponent name={this.props.name2} age={this.props.age2}></RowComponent>

        return [elementA, elementB];
    }
}
import * as React from 'react';
import Button from '../Button/Button'

export default class ButtonGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = [];
        for (let i = 0; i < 10; i += 1) {
            items.push(<Button type="numeric" text={i}></Button>)
        }

        return <div>{items}</div>;
    }
}
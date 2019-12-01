import * as React from 'react';
import TextField from '../Textfield/Textfield';
import ButtonGrid from '../ButtonGrid/ButtonGrid';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="Calculator">
                <TextField></TextField>
                <ButtonGrid></ButtonGrid>
            </div>
        )
    }
}
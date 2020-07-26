import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {name: props.name}
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.name.length > this.state.name.length;
    }

    render() {
        return (
            <div className="Person">
                <div style={{ backgroundColor: 'red', cursor: 'pointer', color: 'white' }} onClick={this.props.removePerson}>DELETE</div>
                <div>
                    Hi, my name is {this.state.name} and I am {this.props.age} years old.
                    <input value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }}></input>
                </div>
            </div>
        );
    }
    
}

export default Person;

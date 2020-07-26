import React, { Component } from 'react';
import './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            changeCounter: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.name.length > this.state.name.length;
    }

    componentWillUnmount() {
        console.log('Unmounting component')
    }

    updateName(newName) {
        this.setState((prevState, props) => {
            return { name: newName, changeCounter: prevState.changeCounter + 1 };
        }); 
    }

    render() {
        console.log("Rendering person")
        return (
            <div className="Person">
                This has been updated {this.state.changeCounter} times.
                <div style={{ backgroundColor: 'red', cursor: 'pointer', color: 'white' }} onClick={this.props.removePerson}>DELETE</div>
                <div>
                    Hi, my name is {this.state.name} and I am {this.props.age} years old.
                    <input value={this.state.name} onChange={(event) => { this.updateName(event.target.value); }}></input>
                </div>
            </div>
        );
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
}

export default Person;

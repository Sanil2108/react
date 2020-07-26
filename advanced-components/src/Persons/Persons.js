import React, { Component } from 'react';
import Person from '../Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.persons !== nextProps.persons;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updating persons");

    }

    render() {
        return (
            <div>{this.props.persons.map((person, idx) => <Person
                    key={idx}
                    name={person.name}
                    age={person.age}
                    removePerson={this.props.removePerson.bind(null, idx)}
                ></Person>)}
            </div>
        )
    }
}

export default Persons;

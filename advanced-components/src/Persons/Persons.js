import React from 'react';
import Person from '../Person/Person'

function Persons(props) {
    return (
        <div>{props.persons.map((person, idx) => <Person
                key={idx}
                name={person.name}
                age={person.age}
                removePerson={props.removePerson.bind(null, idx)}
            ></Person>)}
        </div>
    )
}

export default Persons;

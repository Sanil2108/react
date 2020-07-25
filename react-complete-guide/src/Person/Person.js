import React from 'react';

const person = (props) => {
    return (
        <span>
            <p> I am { props.name } and I am { props.age } years old. </p>
            <p> Some random number is { Math.random() } </p>
        </span>
    )
}

export default person;

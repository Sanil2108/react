import React from 'react';

const person = (props) => {
    console.log(props)
    return (
        <div style={{ padding: '10px', margin: '10px', border: '1px solid black' }}>
            <p> I am { props.name } and I am { props.age } years old. </p>
            <p> Some random number is { Math.random() } </p>
            { props.children }
            <button onClick={props.deleteFunc}>DELETE</button>
        </div>
    )
}

export default person;

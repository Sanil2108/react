import React, { useEffect } from 'react';

function Cockpit(props) {
    useEffect(() => console.log("HELLOSSSSS"))

    return (
        <div>
            <h1>{props.title}</h1>
            <p>The number of people are {props.numberOfPeople}</p>
            <button onClick={props.togglePeople}>
                Toggle people
            </button>
        </div>
    )
}

export default Cockpit;

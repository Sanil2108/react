import React, { useState } from 'react';

function newPerson(props) {
    const colors = ['orange', 'red', 'blue', 'black', 'pink']

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const [ colorState, updateColorState ] = useState({ color: getRandomColor() });
    const [ someRandomNumber, updateRandomNumber ] = useState({ randomNumber: Math.random() });

    return (
        <div style={{ padding: '10px', margin: '10px', background: colorState.color, color: 'white' }}>
            <div>
                I am a new person and my name is {props.name} and my age is {props.age}.
                I can change my colour at my will and My random number is { someRandomNumber.randomNumber }
            </div>
            <button onClick={ updateColorState.bind(null, { color: getRandomColor() }) }>Change my colour</button>
            <button onClick={ updateRandomNumber.bind(null, { randomNumber: Math.random() }) }>Change my random number</button>

            <button onClick={ props.updateParentFunc }>Update my parent!!</button>
        </div>
    )
}

export default newPerson;

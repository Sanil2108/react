import React from 'react';

function changeablePerson(props) {
    return (
        <div style={{ margin: '10px', padding: '10px', boxShadow: '0px 0px 10px 5px #44444455' }}>
            <div>I AM A CHANGEABLE PERSON AND MY NAME IS {props.name}</div>
            <input type="text" onChange={ (event) => { props.changePerson(event.target.value) } }></input>
        </div>
    )
}

export default changeablePerson;

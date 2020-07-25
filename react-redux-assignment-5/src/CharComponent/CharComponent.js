import React from 'react';
import './CharComponent.css'

function CharComponent(props) {
    return (<div onClick={props.onClick} className="CharComponent">{props.letter}</div>)
}

export default CharComponent;

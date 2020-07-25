import React from 'react';

function validationComponent(props) {
    return <div>{(props.textLength >= 5) ? 'Text long enough' : 'Text too short'}</div>
}

export default validationComponent;

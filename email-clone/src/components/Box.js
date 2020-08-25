import * as React from 'react';

export function Box(props) {
    return <div style={{
        background: 'black',
        color: 'white',
        height: '100px',
        width: '100px'
    }}>{ props.text }</div>
}
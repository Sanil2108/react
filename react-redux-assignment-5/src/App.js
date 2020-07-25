import React, { useState } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

function App() {

  const [ textState, setTextState ] = useState('');

  function removeCharacter(index) {
    const textStateCopy = [...textState.split('')];
    textStateCopy.splice(index, 1);
    setTextState(textStateCopy.join(''));
  }

  return (
    <div className="App">
      <h2>Create an input field which outputs the length of the text entered below</h2>

      <input type="text" value={textState} onChange={(event) => { setTextState(event.target.value) }}></input>
      <p>
        { textState.length }
      </p>

      <ValidationComponent textLength={textState.length}></ValidationComponent>

      { textState.split('').map((char, index) => <CharComponent key={index} letter={char} onClick={ removeCharacter.bind(null, index) } />) }
    </div>
  );
}

export default App;

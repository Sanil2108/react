import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>

        <Person name="Sanil" age="21"></Person>
        <Person name="Sanil2" age="22"></Person>
        <Person name="Sanil3" age="23"></Person>
        <Person name="Sanil4" age="24"></Person>
      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello world'));
  }
}

export default App;

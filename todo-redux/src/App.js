import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, ADD } from './store/actions/counterActions';

function App(props) {
  const [enteredCount, setEnteredCount] = useState(0)

  return (
    <div className="App">
      <h1> LISTS </h1>
      { JSON.stringify(props.list.lists) }
      <button onClick={props.addTODO}>Create TODO</button>

      <h1>Counter</h1>
      Current counter value { props.counter.count }
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <input type="number" onChange={ (event) => setEnteredCount(event.target.value) } />
      <button onClick={props.add.bind(null, parseInt(enteredCount))}>Add</button>
    </div>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    addTODO: () => {
      dispatch({ type: 'ADD_TODO', name: 'Nothing' });
    },
    increment: () => {
      dispatch(INCREMENT())
    },
    decrement: () => {
      dispatch(DECREMENT())
    },
    add: (value) => {
      dispatch(ADD(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

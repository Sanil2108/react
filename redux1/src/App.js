import React from 'react';
import './App.css';
import { increment, decrement, selectCount } from './store/store';

class App extends React.Component {
  render() {
    console.log(selectCount);

    return (<div>
      <button onClick={decrement}>Decrement</button>
      {/* { selectCount } */}
      <button onClick={increment}>Increment</button>
    </div>)
  }
}

// function App() {
//   // const state = useSelector(state => state.state)

//   return (
//     <div className="App">
//       Hello world
//     </div>
//   );
// }

export default App;

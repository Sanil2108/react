import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BurgerBuilder></BurgerBuilder>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <a href="/Page1">Page1</a>
      <a href="/Page2">Page2</a>
      <a href="/Page3">Page3</a>
      <Switch>
        <Route exact path="/Page1">
          <Page1></Page1>
        </Route>

        <Route exact path="/Page2">
          <Page2></Page2>
        </Route>

        <Route exact path="/Page3">
          <Page3></Page3>
        </Route>
      </Switch>
    </Router>
  );
}

function Page1() {
  console.log("Something");
  return <h2>Page 1</h2>
}


function Page2() {
  return <h2>Page 2</h2>
}


function Page3() {
  return <h2>Page 3</h2>
}

export default App;

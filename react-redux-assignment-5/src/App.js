import React, { Component } from 'react';
import './App.css';

import Radium from 'radium';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      boxShadow: '0px 0px 8px 2px #44444488',
      padding: '16px',
      margin: '20px',
      display: 'inline-block',
      transition: 'all 1s',
      transform: (this.state.hovered) ? 'scale(1.2)' : 'none',
      ':hover': {
        backgroundColor: 'red',
      },
      '@media (min-width: 500px)': {
        backgroundColor: 'green'
      }
    }

    return (
      <div className="App">
        <div
          onMouseOver={() => this.setState({ hovered: true })}
          onMouseOut={() => this.setState({ hovered: false })}
          style={style}
        >Hello world</div>
      </div>
    );
  }
}

export default Radium(App);

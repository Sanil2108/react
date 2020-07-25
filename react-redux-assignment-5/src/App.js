import React, { Component } from 'react';
import './App.css';

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

export default App;

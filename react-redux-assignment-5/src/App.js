import React, { Component } from 'react';
import classes from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    }
  }

  temp() {
    const a = 4;
    console.log(a + 1);
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

    this.temp()

    if (Math.random() > 0.7) {
      return this.temp.a.a.a.a();
    }

    return (
      <div className={classes.App} >
        <div
          onMouseOver={() => { this.temp(); this.setState({ hovered: true }) }}
          onMouseOut={() => this.setState({ hovered: false })}
          style={style}
        >Hello world</div>
      </div>
    );
  }
}

export default App;

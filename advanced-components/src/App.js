import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { name: 'Sanil', age: 21 },
        { name: 'Pi', age: 100 },
        { name: 'Pi', age: 100000 },
        { name: 'HELLLLOOOO', age: 100000 },
      ],
      showPeople: true,
      showCockpit: true,
    }

    // console.log('In constructor')
  }

  componentDidMount() {
    // console.log('Component did mount');
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps')

    return state;
  }

  render() {
    // console.log('render')

    return (
      <div className="App">
        <button onClick={ () => { this.setState({ showCockpit: !this.state.showCockpit }); } }>Toggle cockpit</button>
        {this.state.showCockpit && <Cockpit
          numberOfPeople={this.state.persons.length}
          togglePeople={() => this.setState({ showPeople: !this.state.showPeople })}
          title={this.props.title}
        >
        </Cockpit>}
        {this.state.showPeople && <Persons
          persons={this.state.persons}
          removePerson={(idx) => {
            const persons = [...this.state.persons];
            persons.splice(idx, 1);
            this.setState({ persons });
          }}
        ></Persons>}
      </div>
    );
  }
  
}

export default App;

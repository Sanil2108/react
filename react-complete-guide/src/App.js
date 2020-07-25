import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import NewPerson from './NewPerson/NewPerson';
import ChangeablePerson from './ChangeablePerson/ChangeablePerson';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    people: [
      { name: 'Sanil', age: 21 },
      { name: 'Sanil2', age: 23 },
      { name: 'Sanil3', age: 24 },
      { name: 'Sanil4', age: 25 },
    ],
    changeablePersonName: 'Sanil',
    showChangeablePerson: false,
  }

  doSomething() {
    const newPeople = this.state.people;
    newPeople[0] = Object.assign(this.state.people[0], {age: 1000000});
    this.setState({
      people: newPeople,
    });
  }

  deletePerson(personIndex) {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>


        {/* <UserOutput>
        </UserOutput>
        <UserOutput></UserOutput>
        <UserOutput></UserOutput> */}

        <button onClick={this.doSomething.bind(this)}>Click me to do something</button>
        { this.state.people.map((person, index) => <Person
          deleteFunc={this.deletePerson.bind(this, index)}
          key={person.name}
          name={person.name}
          age={person.age}
        > </Person>) }

        <NewPerson updateParentFunc={ () => { alert('DON\'T UPDATE CHILDREN') } } name="SANIL KHURANA" age="-100" ></NewPerson>

        <button onClick={() => this.setState({showChangeablePerson: !this.state.showChangeablePerson})}> Toggle showing person </button>
        {
          (this.state.showChangeablePerson) ?
          <ChangeablePerson changePerson={ (personName) => { console.log(personName); this.setState({ changeablePersonName: personName }) } } name={ this.state.changeablePersonName } age="-100" ></ChangeablePerson> :
          null
        }
      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello world'));
  }
}

export default App;

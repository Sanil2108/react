import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsContainer from './components/NewsContainer';
import SearchContainer from './components/SearchContainer';


export default class App extends React.Component {
  

  searchFunction (text) {
    console.log("Search clicked "+text)
  }

  render() {
    return (
      <div className="App">
        <NewsContainer>
  
        </NewsContainer>
      </div>
    );
  }
}

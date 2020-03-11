import React from 'react';
import './App.css';
import NewsContainer from './components/NewsContainer';
import SearchContainer from './components/SearchContainer';

import { Scrollbars } from 'react-custom-scrollbars';

import * as axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      allArticles: null,
    }
  }
  
  searchFunction (searchText) {
    const scope = this;
    axios.get(`https://newsapi.org/v2/everything?q=${searchText}&sortBy=publishedAt&apiKey=d9157c5d499b4d8cb6138354c90253f8`).then(
      (response)=>{
        scope.setState({
          allArticles: response.data.articles,
        })
      },
    ).catch(
      (error)=>{console.log("Error - "+error)}
    )
  }

  render() {
    return (
      <Scrollbars id="scrollbars" style={{ width: "100vw", height: "100vh" }}>
        <div className="App">
          <SearchContainer searchFunction={this.searchFunction.bind(this)}>
            
          </SearchContainer>
          <NewsContainer allArticles={this.state.allArticles}>
    
          </NewsContainer>
        </div>
      </Scrollbars>
    );
  }
}

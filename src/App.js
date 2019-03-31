import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Status from './Status'
import Stats from './Stats'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navigation/>
        
        <Route path='/status' component={Status} />
        <Route path='/stats' component={Stats} />
      </div>
      </BrowserRouter>

    );
  }
}



export default App;

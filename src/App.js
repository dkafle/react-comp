import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorldList from './HelloWorldList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorldList />
        </div>
      </div>
    );
  }
}

export default App;

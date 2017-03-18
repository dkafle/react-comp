import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorldList from './HelloWorldList';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorldList />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;

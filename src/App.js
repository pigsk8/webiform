// app.js
import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm';

class App extends Component {

  render() {
    return(
      <div id="FormContainer">
        <MainForm />
      </div>     )
  }
}

export default App;
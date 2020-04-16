import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Marco Blausza</h2>
        </div>
        <p className="App-intro">
	Kauft den Geilsten Scheiß zum Mainstream Preis. Jedes Teil aus einer Hand gemacht. ^^ Spendet Hände!
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

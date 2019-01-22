import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HOT or COLD</h1>
          <NavigationBar />
        </header>
        <GameBoard />
      </div>
    );
  }
}

export default App;

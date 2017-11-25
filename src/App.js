import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import TemperatureCalculator from './components/TemperatureCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is some practice.
        </p>
        <h1>Clock</h1>
        <Clock></Clock>
        <h1>Toggle</h1>
        <Toggle></Toggle>
        <h1>TemperatureCalculator</h1>
        <TemperatureCalculator></TemperatureCalculator>
      </div>
    );
  }
}

export default App;

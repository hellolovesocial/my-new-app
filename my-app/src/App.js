import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from './CountUp'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      count: 0
    };
    this.countUp = this.countUp.bind(this);
  }

  countUp(){
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CountUp 
          count={this.state.count}
          countUp={this.countUp}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import CountUp from './CountUp';
import Post from './Post';

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
          <img
            src="./flower.jpg" 
            alt="FlowerLogo"
            className="App-headerImage"
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CountUp 
          count={this.state.count}
          countUp={this.countUp}
        />
        <Post 
        />
      </div>
    );
  }
}

export default App;

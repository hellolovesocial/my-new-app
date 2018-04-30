import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import CountUp from './CountUp';
import Post from './Post';
import List from './List';
import MyForm from './MyForm';

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { 
      count: 0,
      postvalue: 'helloだよん',
      viewText: 'testだよん',
      viewNum: 1,
    };
    this.countUp = this.countUp.bind(this);
    this.postUp = this.postUp.bind(this);
  }

  countUp(){
    this.setState({ count: this.state.count + 1 })
  }

  postUp(){
    console.log('number', this.state.viewNum)
    let newNum = this.state.viewNum == 1 ? 0 : 1;
    this.setState({ viewNum: newNum })
  }

  clickAction(event){
    alert('clicked!');
  }

  list(items){
    return items.map((_item,_key) => {
      return(
        <li key={_key}>{_item.value}</li>
      )
  })
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
          postvalue={this.state.postvalue}
          postUp={this.postUp}
          viewNum={this.state.viewNum}
          viewText={this.state.viewText}
          clickAction={this.clickAction}
        />
        <List />
        <MyForm />
      </div>
    );
  }
}

export default App;

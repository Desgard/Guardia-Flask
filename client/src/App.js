import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button type="primary">Button</Button>
        </div>
      </div>
    );
  }
  componentWillMount() {
    var _self = this;
    window.setTimeout(function() {
      _self.setState({
        opacity: 0.5,
        fontSize: '44px'
      });
    }, 1000)
  }
}

export default App;

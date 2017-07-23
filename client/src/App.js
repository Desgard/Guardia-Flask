import React, { Component } from 'react';
import './App.css';
import Header from './components/index/Header'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
   render(){
    return(
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    );
  }
};


export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/index/Header';
import Footer from './components/basic/Footer';
import Pager from './components/basic/Pager';
import CardView from './components/index/CardView';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
   render(){
    var res = [];
    for (var i = 0; i < 5; ++ i) {
      res.push(<CardView />)
    }
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            { res }
            <Pager />
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
};


export default App;

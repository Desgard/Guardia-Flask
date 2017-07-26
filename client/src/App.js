import React, { Component } from 'react';
import './App.css';
import Header from './components/index/Header'
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
          </div>
        </MuiThemeProvider>
        <div style = {{
          'width': '100%',
          'height': '200px',
          'background': 'rgb(33, 33, 33)',
        }}>
        </div>
      </div>
    );
  }
};


export default App;

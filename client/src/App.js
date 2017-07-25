import React, { Component } from 'react';
import './App.css';
import Header from './components/index/Header'
import CardView from './components/index/CardView';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
   render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            
            <div style = {{ 
              'width': '80%', 
              'margin-left': 'auto',
              'margin-right': 'auto',
              'margin-top': '30px',
              'margin-bottom': '30px',
              }}
            >
              <CardView />
            </div>
            <div style = {{ 
              'width': '80%', 
              'margin-left': 'auto',
              'margin-right': 'auto',
              'margin-top': '30px',
              'margin-bottom': '30px',
              }}
            >
              <CardView />
            </div>
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

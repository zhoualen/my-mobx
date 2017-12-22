/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32 
 * @Version			1.0 
 * @Description	
 */

import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';

class App extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  

  render() {
    function genCol (num) {
      let arr = []
      for (var i = 0; i < num; i++) {
        let colR = ~~(Math.random() * 255),
          colG = ~~(Math.random() * 255),
          colB = ~~(Math.random() * 255)
          arr.push(<div 
          style={{ background: `rgba(${colR}, ${colG}, ${colB}, 1)`, height: '350px',  width: '150px', display: 'inline-block' }} />)
      }
      return arr
    }
    return (
      <div className="App">
        { genCol(4) }
      </div>
    );
  }
}

export default App;

import './components/module1.js';
import './components/module2.js';

import React from 'react';
import ReactDOM from 'react-dom';
import SCSS from './assets/style.scss';
class App extends React.Component{
  render(){
    return(<div>Is this thing on?</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

console.log("It's on!");

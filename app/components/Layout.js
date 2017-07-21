import React from 'react';

import Header from './Header';
import Textbox from './Textbox';
import Footer from './Footer';

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "this is the default title",
    };
  }

  changeTitle(e) {
    console.log(e.target);
    console.log(this);
    this.state.title = e.target.value;
    this.setState({title: e.target.value});
  }

  render(){
    return(
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}

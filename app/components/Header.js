import React from 'react';

import Title from './header/Title';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "title",
    };
  }

  // handleChange(e) {
  //   console.log('eeeee', e);
  //   this.props.changeTitle(e);
  // }

  render(){
    console.log('this in header', this);
    return(
      <header>
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.props.changeTitle}/>
      </header>
    );
  }
}

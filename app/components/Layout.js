import React from 'react';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Roman";
    console.log(this);
  }

  render(){
    return(
      <div> It sure is {this.name} </div>
    );
  }
}

import React from 'react';

export default class Textbox extends React.Component {

  addone() {
    console.log('Textbox addone');
    this.props.addone();
  }

  render(){
    return(
      <div>
        {this.props.nameofproperty} <br/>
        <input onChange={this.props.addone} />
      </div>
    );
  }
}

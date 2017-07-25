import React from 'react';

export default class Show extends React.Component {


  render(){
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>{this.props.location.state.item.name}</h2>
        <h2>{this.props.location.state.item.price}</h2>
        <h2>{this.props.location.state.index}</h2>
      </div>
    );
  }
}

import React from 'react';

export default class AnotherShow extends React.Component {

  render(){
    console.log('params', this.props.match.params);
    return(
      <div className="item">
        <br/>
        <br/>
        <br/>
        <br/>
        <h3> ANOTHER SHOW PAGE</h3>
      </div>
    );
  }
}

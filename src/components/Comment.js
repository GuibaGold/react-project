import React from 'react';

export default class Commment extends React.Component{

  render(){
    return(
      <p>{ this.props.text }</p>
    );
  };
}

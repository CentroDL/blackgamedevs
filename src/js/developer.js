import React, { Component } from 'react';

export default class Developer extends Component {

  render(){
    return(
      <div class="developer">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

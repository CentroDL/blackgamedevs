import React, { Component } from 'react';

// Components
import DevGallery from './devGallery';

// data
import developers from '../data/developers';

export default class Home extends Component {
  constructor(){
    super();

    this.state = {
      developers: developers
    };
  }

  render(){
    return(
      <div>
        <div>
          <h1>Black Game Developers</h1>
          <h2>Here they are. Hire them. Buy their stuff.</h2>
        </div>

        <DevGallery developers={this.state.developers}/>
      </div>
    )
  }
}
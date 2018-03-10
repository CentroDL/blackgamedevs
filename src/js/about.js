import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render(){
    return(
      <div>
        <h1>ABOUT</h1>

        <p>
          A project by <a href="https://quantumbox.itch.io/">Arthur Ward Jr</a>, <a href="http://cattsmall.com/">Catt Small</a>, & <a href="http://chrisalgoo.com/">Chris Algoo</a>. Want to add to the list? Go here.
        </p>
      </div>
    )
  }
}
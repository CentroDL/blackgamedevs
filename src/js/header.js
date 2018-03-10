import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return(
      <div>
        <div>
          <h1><Link to="/">BGD</Link></h1>
        </div>

        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  }
}
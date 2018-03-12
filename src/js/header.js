import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <div>
          <h1><Link id="home-icon" to="/">BGD</Link></h1>
        </div>

        <ul>
          <li><NavLink
                to="/about"
                activeClassName="selected"
              >About</NavLink></li>
          <li><NavLink
              to="/"
              activeClassName="selected"
          >Contribute</NavLink></li>
        </ul>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

// components
import Header from './header';
import Home from './home';
import About from './about';

import '../css/styles.css';

export default class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Header/>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'));
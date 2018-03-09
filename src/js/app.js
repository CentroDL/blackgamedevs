import { Component }, React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Home from './home';
import About from './about';

import '../css/styles.css';

export default class App extends Component {
  render() {
    return(
      <Router>

        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'));
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/styles.css';

export default class App extends Component {

  render() {
    return(
      <div>
        Hello From React
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
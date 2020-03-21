import { h, Component } from 'preact';
// import { Router } from 'preact-router';

import Header from './Header.js';
import Home from '../routes/home';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        {/* <Router> */}
        <Home />
        {/* </Router> */}
      </div>
    );
  }
}

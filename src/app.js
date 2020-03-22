import { html } from 'htm/preact';
import { render, Component } from 'preact';
import { Header } from './components/Header.js';
import { MainPage } from './pages/MainPage.js';

class App extends Component {
  render() {
    return html`
      <${Header} />
      <${MainPage} />
    `;
  }
}

render(
  html`
    <${App} />
  `,
  document.getElementById('app')
);

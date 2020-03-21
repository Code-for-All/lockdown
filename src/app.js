import { html } from 'htm/preact';
import { render } from 'preact';
import { Header } from './components/Header.js';
import { MainPage } from './pages/MainPage.js';

render(
  html`
    <${Header} />
    <${MainPage} />
  `,
  document.getElementById('app')
);

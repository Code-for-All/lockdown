import { html } from 'htm/preact';
import { render } from 'preact';
import { Header } from './components/Header.js';
import { MainPage } from './pages/MainPage.js';

const version = '1.0.2';
console.log(version);

window.addEventListener('appinstalled', () => {
  window.location.reload();
});

render(
  html`
    <${Header} />
    <${MainPage} />
  `,
  document.getElementById('app')
);

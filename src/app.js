import { html } from 'htm/preact';
import { render } from 'preact';
import { Header } from './components/Header.js';
import { MainPage } from './pages/MainPage.js';
import version from './version';

console.log(`🌐 Project Lockdown, version: ${version}`);

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

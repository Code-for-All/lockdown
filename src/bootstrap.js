import { html } from 'htm/preact';
import { render } from 'preact';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { App } from './components/App.js';
import version from './version';
import { setFavIcon } from './utils/setFavIcon.js';
import './lazy-resources.js';

console.log(`🌐 Project Lockdown, version: ${version}`);

window.addEventListener('appinstalled', () => {
  window.location.reload();
});

installMediaQueryWatcher(`(prefers-color-scheme: dark)`, (preference) => {
  const localStorageDarkmode = localStorage.getItem('darkmode');
  const darkmodePreferenceExists = localStorageDarkmode !== null;
  const darkMode = localStorageDarkmode === 'true';

  // on initial pageload, decide darkmode on users system preference
  if (!darkmodePreferenceExists) {
    if (preference) {
      document.documentElement.classList.add('dark');
      setFavIcon(true);
    } else {
      document.documentElement.classList.remove('dark');
      setFavIcon(false);
    }
  } else {
    // on subsequent pageloads, decide darkmode on users chosen preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
      setFavIcon(true);
    }
  }
});

render(html`<${App} />`, document.getElementById('app'));

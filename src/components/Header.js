import { html } from 'htm/preact';

const logo = new URL('../assets/images/lockdown.png', import.meta.url).href;

export const Header = () => html`
  <header class="ld-header">
    <a href="/lockdown/">
      <img src="${logo}" width="112" height="28" />
    </a>
    <h1>COVID-19 WORLD LOCKDOWNS</h1>
  </header>
`;

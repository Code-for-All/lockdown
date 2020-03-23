import { html } from 'htm/preact';
import { Totals } from './Totals.js';

const logo = new URL('../assets/images/logo.png', import.meta.url).href;

export const Header = () => html`
  <header class="ld-header">
    <a class="ld-header--logo" href="/lockdown/">
      <img src="${logo}" width="180" />
      <!-- TODO: screen reader h1 -->
    </a>

    <div class="ld-header--totals">
      <${Totals} />
    </div>
  </header>
`;

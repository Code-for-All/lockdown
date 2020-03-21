import { html } from 'htm/preact';
import { render } from 'preact';
import Header from './components/Header.js';
import Totals from './components/Totals.js';
import WorldMap from './components/WorldMap.js';

render(
  html`
    <${Header} />
    <${Totals} />
    <${WorldMap} />
  `,
  document.getElementById('app')
);

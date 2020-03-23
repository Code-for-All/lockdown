import { html } from 'htm/preact';
import {Expandable} from './Expandable.js';

const info = new URL('../assets/icons/info.svg', import.meta.url).href;
const settings = new URL('../assets/icons/settings.svg', import.meta.url).href;
const refresh = new URL('../assets/icons/refresh.svg', import.meta.url).href;
const add = new URL('../assets/icons/circle-plus.svg', import.meta.url).href;

export const Menu = () => html`
  <div class="ld-menu">
    <div class="ld-menu-nav">
      <nav>
        <ul>
          <li>
            <a href="/settings">
              <img src="${settings}" alt="settings" />
              <p>SETTINGS</p>
            </a>
          </li>
          <li>
            <a href="/info">
              <img src="${info}" alt="info" />
              <p>INFO</p>
            </a>
          </li>
          <li>
            <a href="/contribute">
              <img src="${refresh}" alt="contribute" />
              <p>CONTRIBUTE</p>
            </a>
          </li>
          <li>
            <a href="/ticker">
              <img src="${add}" alt="ticker" />
              <p>TICKER</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="ld-menu--content">
      <${Expandable} toggle=${'foo'} detail=${html`<h2>bar</h2>`}/>
      <${Expandable} toggle=${'foo'} detail=${html`<h2>bar</h2>`}/>
      <${Expandable} toggle=${'foo'} detail=${html`<h2>bar</h2>`}/>
    </div>
  </div>
`;

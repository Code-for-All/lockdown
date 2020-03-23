import { html } from 'htm/preact';

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
            <button>
              <img src="${settings}" alt="settings" />
              <p>SETTINGS</p>
            </button>
          </li>
          <li>
            <button>
              <img src="${info}" alt="info" />
              <p>INFO</p>
            </button>
          </li>
          <li>
            <button>
              <img src="${refresh}" alt="contribute" />
              <p>CONTRIBUTE</p>
            </button>
          </li>
          <li>
            <button>
              <img src="${add}" alt="ticker" />
              <p>TICKER</p>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <div class="ld-menu--content"></div>
  </div>
`;

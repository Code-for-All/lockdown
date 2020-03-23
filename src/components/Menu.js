import { html } from 'htm/preact';


// export svg as html`` so you can style them
const info = new URL('../assets/icons/info.svg', import.meta.url).href;
const settings = new URL('../assets/icons/settings.svg', import.meta.url).href;
const refresh = new URL('../assets/icons/refresh.svg', import.meta.url).href;
const add = new URL('../assets/icons/circle-plus.svg', import.meta.url).href;

export const Menu = () => html`
  <div class="ld-menu">
    <div class="ld-desktop-menu">
      <nav>
        <ul>
          <li>
            <a href="?country=United+States+of+America">
              SETTINGS
            </a>
          </li>
          <li>
            <a href="?country=United+States+of+America">
              INFO
            </a>
          </li>
          <li>
            <a href="?country=United+States+of+America">
              CONTRIBUTE
            </a>
          </li>
          <li>
            <a href="?country=United+States+of+America">
              TICKER
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="ld-mobile-menu">
      <a href="/?country=United+States+of+America">
        <img src="${info}" alt="info"/>
      </a>
      <a href="/?country=United+States+of+America">
        <img src="${settings}" alt="info"/>
      </a>
      <a href="/?country=United+States+of+America">
        <img src="${refresh}" alt="info"/>
      </a>
      <a href="/?country=United+States+of+America">
        <img src="${add}" alt="info"/>
      </a>
    </div>
  </div>
`;


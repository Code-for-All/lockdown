import { html } from 'htm/preact';
import { Component } from 'preact';
import { router } from '../router.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

const info = new URL('../assets/icons/info.svg', import.meta.url).href;
const settings = new URL('../assets/icons/settings.svg', import.meta.url).href;
const refresh = new URL('../assets/icons/refresh.svg', import.meta.url).href;
const add = new URL('../assets/icons/circle-plus.svg', import.meta.url).href;
const close = new URL('../assets/icons/x.svg', import.meta.url).href;

export class Menu extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'settings',
      opened: true
    };

    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    installMediaQueryWatcher(`(min-width: 960px)`, matches => {
      this.setState({
        opened: matches
      });
    });
  }

  switchContent(val) {
    router.setPath(val);
    this.setState({
      activeItem: val,
      opened: true
    });
  }

  closeMenu() {
    this.setState({
      opened: false
    });
  }

  render(_, { activeItem, opened }) {
    return html`
      <div class="ld-menu">
        <div class="ld-menu-nav">
          <nav>
            <ul>
              <li>
                <button onClick=${() => this.switchContent('settings')}>
                  <img src="${settings}" alt="settings" />
                  <p>SETTINGS</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('info')}>
                  <img src="${info}" alt="info" />
                  <p>INFO</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('contribute')}>
                  <img src="${refresh}" alt="contribute" />
                  <p>CONTRIBUTE</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('ticker')}>
                  <img src="${add}" alt="ticker" />
                  <p>TICKER</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        ${opened
          ? html`
              <div class="ld-menu--content">
                <div class="mb-only">
                  <div class="ld-menu--header">
                    <h1>${activeItem}</h1>
                    <button onClick=${this.closeMenu} class="ld-menu--content-x">
                      <img src=${close} alt="close" />
                    </button>
                  </div>
                </div>
                ${activeItem === 'settings'
                  ? html`
                      settings
                    `
                  : ''}
                ${activeItem === 'info'
                  ? html`
                      info
                    `
                  : ''}
                ${activeItem === 'contribute'
                  ? html`
                      contribute
                    `
                  : ''}
                ${activeItem === 'ticker'
                  ? html`
                      ticker
                    `
                  : ''}
              </div>
            `
          : ''}
      </div>
    `;
  }
}

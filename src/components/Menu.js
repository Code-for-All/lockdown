import { html } from 'htm/preact';
import { Component } from 'preact';
import { router } from '../router.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { Expandable } from './Expandable.js';

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
                      <${Expandable}
                        toggle=${'Sources'}
                        detail=${html`
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        `}
                      />
                      <${Expandable}
                        toggle=${'Credits'}
                        detail=${html`
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                          </p>
                        `}
                      />
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

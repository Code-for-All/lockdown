import { html } from 'htm/preact';
import { Component } from 'preact';
import { Expandable } from './Expandable.js';
import { Ticker } from './Ticker.js';
import { Settings } from './Settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { info, settings, refresh, add } from '../assets/icons/icons.js';
import { addPwaUpdateListener } from '../utils/addPwaUpdateListener.js';

const renderMenu = menuItem => {
  switch (menuItem) {
    case 'info':
      return {
        title: 'info',
        template: html`
          <h1>Lockdown</h1>
          <p>
            <b>Project Lockdown</b> aims to map the different lockdowns around the world, offering the public a number of relevant metrics
            in order to provide an overview of the restrictions applied worldwide. We hope this will help evaluate the seriousness of the
            COVID-19 pandemic and help journalists and Human Rights defenders in their reporting and overseeing tasks.
          </p>
          <${Expandable}
            toggle=${'About'}
            detail=${html`
              <p>
                While lockdowns generally help countries to flatten the curve, and prevent COVID-19 from spreading, countries with a
                dictatorial nature may see this as an opportunity to increase their grasp over a country, and even potentially lead to
                martial law type scenarios. Governments may unnecesarily prolong lockdowns or not stick to their announced end dates for
                political gain. <b>Project Lockdown</b> aims to visualize these situations.
              </p>
            `}
          />
          <${Expandable}
            toggle=${'Sources'}
            detail=${html`
              <p>
                <b>Project Lockdown</b> uses a variety of sources to compile all the information showcased. We make sure to only consider sources that are reliable and verifiable.
                You can check all the <a rel="noopener noreferrer" target="_blank" href="https://www.TIOF.Click/LockdownData">sources</a> employed here: 
                <ul class="ld-sources">
                  <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.travel-advisory.info/">Travel-advisory API</a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://api.coronatracker.com/">Coronatracker API</a><br/>
                    Recognized by <a rel="noopener noreferrer" target="_blank" href="https://www.who.int/bulletin/online_first/COVID-19/en/">WHO</a>
                  </li>
                  <li>
                    For reference data see the <b>Data Sources</b> Tab.
                  </li>
                  <li>
                    For country data see the <b>Find the Countries</b> Tab by it's ISO Alpha 3 code.
                    (Quick find through Global Tab)
                  </li>
                </ul>
                If you find any errors, please help us and report it <a rel="noopener noreferrer" target="_blank" href="https://github.com/Code-for-All/lockdown/issues">by creating an issue here</a>.
              </p>
            `}
          />
          <${Expandable}
            toggle=${'Credits'}
            detail=${html`
              <p>
                <b>Project Lockdown</b> is a Civic Tech initiative from a number of organizations and individuals. You can find the
                <a rel="noopener noreferrer" target="_blank" href="https://www.TIOF.Click/LockdownData">list of project members here</a>
                under the <b>Credits</b> tab.
              </p>
            `}
          />
          <${Expandable}
            toggle=${'Data & Privacy'}
            detail=${html`
              <p>
                We do not collect any information from our visitors.
              </p>
              <p>
                All information from any project member shown anywhere in the application is under their prior consent.
              </p>
            `}
          />
        `
      };
    case 'settings':
      return {
        title: 'settings',
        template: html`
          <${Settings} />
        `
      };
    case 'contribute':
      return {
        title: 'contribute',
        template: html`
        <p>
          <b>Project Lockdown</b> is made possible by the contribution of many individuals who are giving their time to make possible that everyone has access to the right information.
        </p>
        <p>
          Do you have any information you want to contribute? Please follow this link:
        </p>
        <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform">
          Submit data
        </a>
        <p>
          Additionally, you can become part of the project by joining one of the following teams: 
          <ul>
            <li>Editors</li>
            <li>Devs</li>
            <li>UI/UX</li>
          </ul>
        </p>
        <p>
          Contact us via Telegram at:
          <br/>
          <a class="ld-link">@ProjectLockdown</a>
        </p>
        `
      };
    case 'updates':
      return {
        title: 'updates',
        template: html`
          <${Ticker} />
        `
      };
    default:
      return {
        title: '',
        template: html``
      };
  }
};

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateAvailable: false,
      activeItem: 'info'
    };
  }

  componentDidMount() {
    installMediaQueryWatcher(`(min-width: 960px)`, matches => {
      this.setState({
        isMobile: !matches
      });
      if (matches) {
        this.props.close();
      }
    });

    addPwaUpdateListener(updateAvailable => {
      this.setState({
        updateAvailable
      });
    });
  }

  switchContent(val) {
    if (val === 'settings' && this.state.updateAvailable) {
      this.setState({
        updateAvailable: false
      });
    }

    if (this.state.isMobile && this.props.opened && val === this.prevVal) {
      this.props.close();
      this.setState({
        activeItem: this.prevVal
      });
      this.prevVal = '';
      return;
    }

    this.props.changeRoute(renderMenu(val));
    this.prevVal = val;
    this.setState({
      activeItem: val
    });
  }

  render(_, { activeItem, updateAvailable }) {
    return html`
      <div class="ld-menu">
        <div class="ld-menu-nav">
          <nav>
            <ul>
              <li>
                <button onClick=${() => this.switchContent('info')}>
                  ${info}
                  <p class="${activeItem === 'info' ? 'ld-menu--active' : ''}">INFO</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('settings')}>
                  ${updateAvailable
                    ? html`
                        <div class="ld-menu--notification"></div>
                      `
                    : ''}
                  ${settings}
                  <p class="${activeItem === 'settings' ? 'ld-menu--active' : ''}">SETTINGS</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('updates')}>
                  ${refresh}
                  <p class="${activeItem === 'updates' ? 'ld-menu--active' : ''}">UPDATES</p>
                </button>
              </li>
              <li>
                <button onClick=${() => this.switchContent('contribute')}>
                  ${add}
                  <p class="${activeItem === 'contribute' ? 'ld-menu--active' : ''}">CONTRIBUTE</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="ld-menu--content">
          <div class="mb-only">
            <div class="ld-menu--header">
              <h1>${activeItem}</h1>
            </div>
          </div>
          ${renderMenu(activeItem).template}
        </div>
      </div>
    `;
  }
}

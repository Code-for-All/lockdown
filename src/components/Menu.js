import { html } from 'htm/preact';
import { Component } from 'preact';
import { Expandable } from './Expandable.js';
import { Ticker } from './Ticker.js';
import css from 'csz';
import { Settings } from './Settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import Tabs from '../components/Tabs.js';
import { close, trues, burger, close as closeIcon } from '../assets/icons/icons.js';

const styles = css`
  & {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    border-collapse: collapse;
  }

  th {
    border-top: transparent;
    padding: 12px;
  }
  th:nth-child(1),
  th:nth-child(2) {
    border-left: transparent;
    border-right: 1px solid var(--ld-text);
    border-bottom: 1px solid var(--ld-text);
  }

  th:nth-child(3) {
    border-bottom: 1px solid var(--ld-text);
  }

  td:nth-child(1) {
    border-left: transparent;
    border-right: 1px solid var(--ld-text);
  }

  td:nth-child(2) {
    border-right: 1px solid var(--ld-text);
  }

  th,
  td:nth-child(3) {
    border-right: transparent;
  }
  td:nth-child(3),
  td:nth-child(2),
  td:nth-child(1) {
    border-bottom: 1px solid var(--ld-text);
  }
  tr {
    font-weight: 600;
    font-size: 14px;
    padding: 15px;
    border-top: transparent;
  }

  tr:last-of-type {
    td {
      border-bottom: transparent;
    }
  }

  .note {
    font-weight: 100;
    font-size: 12px;
  }

  td {
    text-align: center;
    padding: 5px;
    svg {
      stroke: var(--ld-text);
      & svg {
        .dark & {
          stroke: white !important;
        }
      }
    }
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .default {
    background: #cccccc;
  }
  .blue {
    background: #7aaeff;
  }
  .red {
    background: #eb5757;
  }
  .yellow {
    background: #f2994a;
  }
  .green {
    background: #6fcf97;
  }
`;
const preStyles = css`
  .ld-menu--content {
    display: block;
    top: 0px;
    right: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    width: 30vw;
    border-radius: 20px 0px 0px 20px;
    -moz-border-radius: 20px 0px 0px 20px;
    -webkit-border-radius: 20px 0px 0px 20px;
    overflow: auto;
    @media (max-width: 960px) {
      border-radius: 0px;
      width: calc(100vw - 100%);
      left: calc(100% - 100vw);
    }
    .dark & {
      background-color: #333333 !important;
    }
  }
`;
const styles2 = css`
    @keyframes fadeInRight {
      from {
        opacity: 0;
        width: 0%;
      }

      to {
        opacity: 1;
        width: 8%;
      }
    }
    @keyframes fadeInRightM {
      from {
        opacity: 0;
        width: 0%;
      }

      to {
        opacity: 1;
        width: 23%;
      }
    }
    & {
      @media (max-width: 960px) {
        width: 20%;
        top: 0px;
        height: 100%;
        animation: fadeInRightM 1s;
      }
      height: 75%;
      @media (min-width: 960px) {
        animation: fadeInRight 1s;
      }
      top: 5%
      bottom: 20%;
      width: 5%;
      max-width: 60px;
      position: absolute;
      padding: 0;
      right: 0px;
      background-color: #f2f2f2;
      z-index: 1100;
      .dark & {
        background-color: var(--ld-gray-2) !important;
      }
      & .ld-menu-nav {
        display: flex;
        height: 100%;
        width: 100%;
        & nav {
          width: 100%;
          padding: 10px 0px 10px 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          & ul {
            padding: 0;
            justify-content: flex-start;
            align-items: left;
            min-height: 50%;
            display: flex;
            flex-direction: column;
            & li {
              margin-bottom: 29%;
              &.hide{
                display: none; /*Just for now*/
              }
              & button {
                background-color: transparent;
              }
              & .ld-menu--active {
                &:focus:not(.leaflet-container) {
                  box-shadow: none !important;
                }
                position: relative;
                background-color: white;
                .dark & {
                  background-color: #333333 !important;
                  color: white !important;
                }
                & svg {
                  .dark & {
                    stroke: white;
                  }
                }
                &::before {
                  position: absolute;
                  left: -20%;
                  top: -40%;
                  height: 180%;
                  width: 120%;
                  z-index: -1;
                  content: ' ';
                  .dark & {
                    background-color: #333333 !important;
                  }
                  border-radius: 0% 100% 100% 69% / 0% 50% 51% 0%;
                  border: 0px;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  background-color: #ffffff;
                }
              }
              & svg {
                color: #999999;
                .dark & {
                  color: white;
                  stroke: white;
                }
              }
            }
          }
        }
      }
    }
`;

const sideBtn = css`
  .dark & {
    background-color: transparent;
    color: white;
    background-image: url(/src/assets/icons/menu/black.svg);
    & svg {
      color: white;
    }
    &:hover {
      cursor: pointer;
    }
  }
  & {
    position: absolute;
    height: 108px;
    width: 50px;
    z-index: 2000;
    top: calc((100vh / 2) - 20px);
    right: -5px;
    border-radius: 100% 0% 0% 100% / 21% 0% 0% 21%;
    border: 0px;
    background-color: transparent;
    background-image: url(/src/assets/icons/menu/white.svg);
    &:focus:not(.leaflet-container) {
      box-shadow: none !important;
    }
    & svg {
      color: #333333;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
const closeBtn = css`
  & {
    position: absolute !important;
    color: white;
    background-color: var(--ld-hover);
    padding: 0px !important;
    top: 10%;
    width: 39px !important;
    height: 39px !important;
    right: 0;
    left: 0;
    margin-right: auto !important;
    margin-left: auto !important;
    border-radius: 50% !important;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 960px) {
      background: transparent !important;
      box-shadow: none;
      border-radius: 0px;
    }
  }
  .dark & {
    position: absolute !important;
    color: white;
    background-color: var(--ld-hover);
    padding: 0px;
    top: 10%;
    width: 39px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 960px) {
      background: transparent !important;
      box-shadow: none;
      border-radius: 0px;
    }
  }
`;
const overlay = css`
  & {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1100;
    background-color: rgba(40, 40, 40, 0.8);
    width: 100%;
    height: 100%;
    @media (max-width: 960px) {
      display: none;
    }
  }
`;
const renderMenu = (menuItem, callback, currentDropdown, onDropDown, onLocateChange) => {
  switch (menuItem) {
    case 'info':
      return {
        title: 'info',
        template: html`
          <h1>Lockdown</h1>
          <p class="ld-alpha">
            Project lockdown is currently in beta. Not all data may be available yet.
          </p>
          <p>
            <b>Project Lockdown</b> provides a mapping of the different NPIs (Non-Pharmaceutical Interventions) enforced by across the globe
            in response to the COVID-19 crisis to visualize the success of different pandemic response measures, monitor effects on Human
            and Digital Rights, and clarify evaluation metrics.
          </p>

          <${Expandable}
            toggle=${'About'}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                Lockdown, quarantine, and isolation measures have been implemented across the globe to reduce the spread of COVID-19 and
                reduce the strain on medical infrastructure. <b>Project Lockdown</b> empowers citizens, journalists, and Human Rights
                Defenderes to easily analyze the social and political effects of these measures. Founded on the values of transparency and
                accountability, <b>Project Lockdown</b> is committed to providing citizens of the world with the tools they need to stay
                safe and informed.
              </p>
            `}
          />

          <${Expandable}
            toggle=${'Sources'}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                <b>Project Lockdown</b> combines multiple trusted sources to ensure that the data used is verified and accurate. You can find the full list of sources used here:
                <ul class="ld-sources">
                  <li>
                  <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://TIOF.Click/LockdownData" target="_blank"> Project Lockdown's Database</a><br/>
                  (Collected from a number of NPI sources)
                  </li>
                  <li>
                   <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://covid19api.com/" target="_blank">Coronavirus COVID19 API</a><br/>
                  (Data sourced from <a href="https://systems.jhu.edu/" target="_blank">Johns Hopkins CSSE)</a><br/>
                  </li>
                </ul>
                If you find any errors, please help us and report it <a rel="noopener noreferrer" target="_blank" href="https://github.com/Code-for-All/lockdown/issues">by creating an issue here</a>.
              </p>
            `}
          />
          <${Expandable}
            toggle=${'Credits'}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                <b>Project Lockdown</b> is a Civic Tech initiative made possible by a number of dedicated individuals and organizations.
                View the list of contributors
                <a
                  href="https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797"
                  target="_blank"
                  >here</a
                >.
              </p>
            `}
          />

          <${Expandable}
            toggle=${'Data & Privacy'}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                We do not collect any personal information from our visitors.
              </p>
              <p>
                All information on project members is provided with their consent.
              </p>
            `}
          />
        `,
      };
    case 'settings':
      return {
        title: 'settings',
        template: html` <${Settings} onClose=${callback} onLocateChange=${onLocateChange} /> `,
      };
    case 'contribute':
      return {
        title: 'contribute',
        template: html`
        <p>
          Do you have any NPI source you would want to share with us? Please follow this link:
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
          <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://t.me/ProjectLockdown"> @ProjectLockdown</a>
        </p>
        `,
      };

    case 'updates':
      return {
        title: 'updates',
        template: html` <${Ticker} /> `,
      };

    default:
      return {
        title: '',
        template: html``,
      };
  }
};

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'info',
      showLateralMenu: false,
      showMenu: false,
      currentDropdown: 1,
    };
    this.showSideBar = this.showSideBar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.switchContent = this.switchContent.bind(this);
    this.onDropDown = this.onDropDown.bind(this);
  }

  componentDidMount() {
    let i = 0;

    installMediaQueryWatcher(`(min-width: 960px)`, (matches) => {
      this.setState({
        isMobile: !matches,
      });
      if (matches && i > 0) {
        // This is super ugly, but this fires on pageload and causes the focus to be set on the menu :/
        i++;
        this.props.close();
      }
    });
  }
  showSideBar() {
    this.setState({
      showLateralMenu: true,
      showMenu: true,
    });
  }
  switchContent(val) {
    if (val === 'settings' && this.state.updateAvailable) {
      this.setState({
        updateAvailable: false,
      });
    }

    if (this.state.isMobile && this.props.opened && val === this.prevVal) {
      this.props.close();
      this.setState({
        activeItem: this.prevVal,
      });
      this.prevVal = '';
      return;
    }

    // this.props.changeRoute(renderMenu(val));

    this.prevVal = val;
    this.setState({
      activeItem: val,
      showLateralMenu: val === this.state.activeItem ? false : true,
    });
  }

  closeNavbar() {
    this.setState({
      showLateralMenu: false,
      showSideBar: false,
      activeItem: 'info',
    });
  }

  onDropDown(id) {
    this.setState({
      currentDropdown: id,
    });
  }

  render(_, { activeItem, updateAvailable, currentDropdown }) {
    return html`
      ${this.state.showLateralMenu || this.props.isMobile === true
        ? html`<div class="menu-overlay ${overlay}"></div>
            <main id="main" class="ld-menu ${styles2} ${this.state.showLateralMenu ? preStyles : ''}">
              <div class="ld-menu-nav">
                <button class="${closeBtn}" onClick=${this.closeNavbar}>${closeIcon}</button>
                <nav>
                  <${Tabs} onClose=${this.closeNavbar} switchContent=${this.switchContent}>
                    <button id="info">info</button>
                    <button id="settings">settings</button>
                    <button id="updates">updates</button>
                    <button id="contribute">contribute</button>
                  <//>
                </nav>
              </div>
              <div class="ld-menu--content">
                <div class="mb-only">
                  <div class="ld-menu--header">
                    <h1>${activeItem}</h1>
                  </div>
                </div>
                ${renderMenu(activeItem, this.closeNavbar, currentDropdown, this.onDropDown, _.onLocateChange).template}
              </div>
            </main>`
        : html`<button onClick=${this.showSideBar} class="${sideBtn}">
            ${burger}
          </button>`}
    `;
  }
}

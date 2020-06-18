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
    width: 700px;
    border-radius: 0px 0px 0px 0px;
    -moz-border-radius: 0px 0px 0px 0px;
    -webkit-border-radius: 0px 0px 0px 0px;
    overflow: auto;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
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
      width: 56px;
      top: 0px;
      height: 100%;
      animation: fadeInRightM 1s;
    }
    height: 100%;
    @media (min-width: 960px) {
      animation: fadeInRight 1s;
    }
    top: 0;
    bottom: 0;
    width: 56px;
    max-width: 56px;
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
            &.hide {
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
              background-color: transparent;
              .dark & {
                background-color: transparent !important;
                color: white !important;
              }
              & svg {
                .dark & {
                  color: #f2f2f2;
                }
                color: #828282;
              }
              &::before {
                position: absolute;
                left: -1px;
                top: 7px;
                height: 15px;
                width: 10px;
                z-index: -1;
                content: ' ';
                border-radius: 0% 100% 100% 69% / 0% 50% 51% 0%;
                border: 0px;
                /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
                background-color: transparent;
                z-index: 2000;
                border-width: 10px 0 10px 10px;
                border-style: solid;
                border-color: transparent transparent transparent #ffffff;
                .dark & {
                  background-color: transparent !important;
                  border-color: transparent transparent transparent #333333;
                }
              }
            }
            & svg {
              color: #bdbdbd;
              .dark & {
                color: #bdbdbd;
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
    bottom: 150px;
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
    background-color: transparent;
    padding: 0px !important;
    top: 90px;
    width: 39px !important;
    height: 39px !important;
    right: 0;
    left: 0;
    margin-right: auto !important;
    margin-left: auto !important;
    border-radius: 50% !important;
    /*box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);*/
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
    background-color: transparent;
    padding: 0px;
    top: 10%;
    width: 39px;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
    /*box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);*/
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
const renderMenu = (menuItem, callback, currentDropdown, onDropDown, onLocateChange, locale) => {
  switch (menuItem) {
    case 'info':
      return {
        title: 'info',
        template: html`
          <h1>Lockdown</h1>
          <p class="ld-alpha">
            ${locale.t('menu.informationSection.banner')}
          </p>
          <p>
            <b>${locale.t('menu.informationSection.main.name')}</b>
            ${locale.t('menu.informationSection.main.text')}
          </p>

          <${Expandable}
            toggle=${locale.t('menu.informationSection.about.title')}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                ${locale.t('menu.informationSection.about.text.p1')}
                <b>${locale.t('menu.informationSection.main.name')}</b>
                ${locale.t('menu.informationSection.about.text.p2')}
                <b>${locale.t('menu.informationSection.main.name')}</b>
                ${locale.t('menu.informationSection.about.text.p3')}
              </p>
            `}
          />

          <${Expandable}
            toggle=${locale.t('menu.informationSection.sources.title')}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                <b>${locale.t('menu.informationSection.main.name')}</b>
                ${locale.t('menu.informationSection.sources.subtitle')}
                <ul class="ld-sources">
                  <li>
                    <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://TIOF.Click/LockdownData" target="_blank"> ${locale.t(
                      'menu.informationSection.sources.linksList.first.linkTitle'
                    )}</a><br/>
                    ${locale.t('menu.informationSection.sources.linksList.first.text')}
                  </li>
                  <li>
                   <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://covid19api.com/" target="_blank">${locale.t(
                     'menu.informationSection.sources.linksList.second.linkTitle'
                   )}</a><br/>
                   ${locale.t(
                     'menu.informationSection.sources.linksList.second.text'
                   )} <a href="https://systems.jhu.edu/" target="_blank">${locale.t(
              'menu.informationSection.sources.linksList.second.highlight'
            )}</a><br/>
                  </li>
                </ul>
                ${locale.t(
                  'menu.informationSection.sources.issues.text'
                )} <a rel="noopener noreferrer" target="_blank" href="https://github.com/Code-for-All/lockdown/issues">${locale.t(
              'menu.informationSection.sources.issues.highlight'
            )}</a>.
              </p>
            `}
          />
          <${Expandable}
            toggle=${locale.t('menu.informationSection.credits.title')}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                <b>${locale.t('menu.informationSection.main.name')}</b>
                ${locale.t('menu.informationSection.credits.text')}
                <a
                  href="https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797"
                  target="_blank"
                  >${locale.t('menu.informationSection.credits.highlight')}</a
                >.
              </p>
            `}
          />

          <${Expandable}
            toggle=${locale.t('menu.informationSection.dataPrivacity.title')}
            currentDropdown=${currentDropdown}
            onDropDown=${onDropDown}
            detail=${html`
              <p>
                ${locale.t('menu.informationSection.dataPrivacity.paragraphs.p1')}
              </p>
              <p>
                ${locale.t('menu.informationSection.dataPrivacity.paragraphs.p2')}
              </p>
            `}
          />
        `,
      };
    case 'settings':
      return {
        title: 'settings',
        template: html` <${Settings} onClose=${callback} onLocateChange=${onLocateChange} locale=${locale} /> `,
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
                ${renderMenu(activeItem, this.closeNavbar, currentDropdown, this.onDropDown, _.onLocateChange, _.locale).template}
              </div>
            </main>`
        : html`<button onClick=${this.showSideBar} class="${sideBtn}">
            ${burger}
          </button>`}
    `;
  }
}

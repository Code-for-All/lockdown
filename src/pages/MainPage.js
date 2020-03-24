import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { WorldMap } from '../components/WorldMap.js';
import { CountryInfo } from '../components/CountryInfo.js';
import { Totals } from '../components/Totals.js';
import { router } from '../router.js';
import { Menu } from '../components/Menu.js';

const KEYCODE_ESC = 27;

const totalsStyles = css`
  & {
    position: fixed;
    z-index: 1100;
    top: 74px;
    left: 50%;
    margin: 0 auto;
    background-color: white;
    transform: translateX(-50%);
    border-radius: 12px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
  }

  @media (min-width: 900px) {
    & {
      display: none;
    }
  }
`;

const dialogStyles = css`
  & {
    width: 90%;
    padding: 20px;
    max-width: 400px;
    left: calc(50% + 200px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    position: fixed;
    z-index: 1100;
    background-color: white;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
  }

  .ld-dialog--header {
  }

  .ld-dialog--close {
  }

  .ld-dialog--content {
  }

  @media (max-width: 960px) {
    & {
      width: 90%;
      max-width: 400px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 70%;
    }
  }
`;

export class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      dialog: {
        opened: false,
        template: {}
      }
    };

    this.__onPathChanged = this.__onPathChanged.bind(this);
    this.__closeCountryInfo = this.__closeCountryInfo.bind(this);
    this.__closeDialog = this.__closeDialog.bind(this);
    this.__change = this.__change.bind(this);
    this.__onKeyDown = this.__onKeyDown.bind(this);
  }

  async componentDidMount() {
    this.__onPathChanged();
  }

  componentWillMount() {
    window.addEventListener('keydown', this.__onKeyDown, true);
    router.addEventListener('path-changed', this.__onPathChanged);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.__onKeyDown, true);
    router.removeEventListener('path-changed', this.__onPathChanged);
  }

  render() {
    return html`
      <div class=${totalsStyles}>
        <${Totals} />
      </div>

      <${WorldMap} />
      <${Menu} change=${this.__change} close=${this.__closeDialog} />

      ${this.state.dialog.opened
        ? html`
            <div class="${dialogStyles}">
              <div class="ld-dialog--header">
                <button onClick=${this.__closeDialog} class="ld-dialog--close">X</button>
                <h1>hello</h1>
              </div>
              <div class="ld-dialog--content">
                ${this.state.dialog.template}
              </div>
            </div>
          `
        : ''}
    `;
  }

  __onPathChanged() {
    const country = router.url.searchParams.get('country');

    if (country) {
      this.setState({
        dialog: {
          opened: true,
          template: html`
            <${CountryInfo} country=${country} />
          `
        }
      });
    }
  }

  __onKeyDown(e) {
    if (e.keyCode === KEYCODE_ESC) {
      this.__closeDialog();
    }
  }

  __change(template) {
    this.setState({
      dialog: {
        opened: true,
        template
      }
    });
  }

  __closeCountryInfo() {
    router.setSearchParam('country', undefined);
  }

  __closeDialog() {
    this.setState({
      dialog: {
        opened: false,
        template: ''
      }
    });
    this.__closeCountryInfo();
  }
}

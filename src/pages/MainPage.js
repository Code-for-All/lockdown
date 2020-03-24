import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { WorldMap } from '../components/WorldMap.js';
import { CountryInfo } from '../components/CountryInfo.js';
import { Totals } from '../components/Totals.js';
import { router } from '../router.js';
import { Menu } from '../components/Menu.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

const KEYCODE_ESC = 27;
const close = new URL('../assets/icons/x.svg', import.meta.url).href;

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
    display: flex;
    text-align: center;
  }

  .ld-dialog--header h1 {
    margin-top: 0;
    margin-left: 24px;
    flex: 1;
  }

  .ld-dialog--close-cont {
  }

  .ld-dialog--close-cont button {
    width: 24px;
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
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
        template: {},
        title: ''
      }
    };

    this.__onPathChanged = this.__onPathChanged.bind(this);
    this.__closeCountryInfo = this.__closeCountryInfo.bind(this);
    this.__closeDialog = this.__closeDialog.bind(this);
    this.__change = this.__change.bind(this);
    this.__onKeyDown = this.__onKeyDown.bind(this);
    this.__onClick = this.__onClick.bind(this);
    this.__changeRoute = this.__changeRoute.bind(this);
  }

  async componentDidMount() {
    this.__onPathChanged();
    installMediaQueryWatcher(`(min-width: 960px)`, matches => {
      this.setState({
        isMobile: !matches
      });
    });
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
      <${Menu} changeRoute=${this.__changeRoute} close=${this.__closeDialog} />

      ${this.state.dialog.opened
        ? html`
            <div class="${dialogStyles}">
              <div class="ld-dialog--header">
                <h1>${this.state.dialog.title}</h1>
                <div class="ld-dialog--close-cont">
                  <button onClick=${this.__closeDialog} class="ld-dialog--close">
                    <img src=${close} alt="close" />
                  </button>
                </div>
              </div>
              <div class="ld-dialog--content">
                ${this.state.dialog.template}
              </div>
            </div>
          `
        : ''}
    `;
  }

  __changeRoute({ template, title }) {
    const country = router.url.searchParams.get('country');

    if (country) {
      router.setPath(`${title}?country=${country}`);
    } else {
      router.setPath(title);
    }

    if (this.state.isMobile) {
      router.setSearchParam('country', null);
      this.__change({ template, title });
    }
  }

  __onPathChanged() {
    const country = router.url.searchParams.get('country');

    if (country) {
      this.setState({
        dialog: {
          opened: true,
          template: html`
            <${CountryInfo} country=${country} />
          `,
          title: country
        }
      });
    }
  }

  __onKeyDown(e) {
    if (e.keyCode === KEYCODE_ESC) {
      this.__closeDialog();
    }
  }

  __change({ template, title }) {
    this.setState({
      dialog: {
        opened: true,
        template,
        title
      }
    });
  }

  __onClick(e) {
    const clickedOutside = !e.path.includes(this.dialogRef);
    if (clickedOutside) {
      this.__closeDialog();
    }
  }

  __closeCountryInfo() {
    router.setSearchParam('country', undefined);
  }

  __closeDialog() {
    this.setState({
      dialog: {
        opened: false,
        template: '',
        title: ''
      }
    });
    this.__closeCountryInfo();
  }
}

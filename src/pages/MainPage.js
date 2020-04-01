import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { WorldMap } from '../components/WorldMap.js';
import { CountryInfo } from '../components/CountryInfo.js';
import { Totals } from '../components/Totals.js';
import { router } from '../router.js';
import { Menu } from '../components/Menu.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { close } from '../assets/icons/icons.js';
import { setFavIcon } from '../utils/setFavIcon.js';

const KEYCODE_ESC = 27;

const totalsStyles = css`
  & {
    position: fixed;
    z-index: 1100;
    top: 74px;
    left: 50%;
    margin: 0 auto;
    background-color: var(--ld-bg);
    color: var(--ld-text);
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
    position: fixed;
    margin-left: 400px;
    margin-top: 60px;
    width: 100%;
    height: 100%;
    z-index: 1100;
  }

  .ld-dialog--container {
    overflow: hidden;
    position: fixed;
    width: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 400px;
    left: calc(50% + 200px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
  }

  .ld-dialog--header {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .ld-dialog--header h1 {
    margin-top: 0;
    margin-left: 24px;
    margin-bottom: 0;
    flex: 1;
  }

  .ld-dialog--content {
    overflow: auto;
    height: calc(100% - 40px);
    padding: 0 20px 20px 20px;
  }

  .ld-dialog--close-cont button {
    display: flex;
    padding: 0;
    width: 30px;
    border: none;
    overflow: visible;
    background: transparent;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: var(--ld-text);
  }

  .ld-dialog--close-cont button:hover {
    background-color: var(--ld-hover);
    border-radius: 50%;
  }

  @media (max-width: 960px) {
    & {
      margin-bottom: 60px;
      margin-top: 60px;
      position: fixed;
      width: 100%;
      height: calc(100% - 120px);
      z-index: 1100;
      margin-left: 0;
    }

    .ld-dialog--container {
      width: 90%;
      max-width: 400px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: calc(100% - 140px);
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

    installMediaQueryWatcher(`(prefers-color-scheme: dark)`, preference => {
      const localStorageDarkmode = localStorage.getItem('darkmode');
      const darkmodePreferenceExists = localStorageDarkmode !== null;
      const darkMode = localStorageDarkmode === 'true';
      // on initial pageload, decide darkmode on users system preference
      if (!darkmodePreferenceExists) {
        if (preference) {
          document.getElementsByTagName('html')[0].classList.add('dark');
          setFavIcon(true);
        } else {
          document.getElementsByTagName('html')[0].classList.remove('dark');
          setFavIcon(false);
        }
      } else {
        // on subsequent pageloads, decide darkmode on users chosen preference
        if (darkMode) {
          document.getElementsByTagName('html')[0].classList.add('dark');
          setFavIcon(true);
        }
      }
    });

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
      <${Menu} opened=${this.state.dialog.opened} changeRoute=${this.__changeRoute} close=${this.__closeDialog} />

      ${this.state.dialog.opened
        ? html`
            <div class="${dialogStyles}" onClick=${this.__onClick}>
              <div ref=${ref => (this.dialogRef = ref)} class="ld-dialog--container">
                <div class="ld-dialog--header">
                  <h1>${this.state.dialog.title}</h1>
                  <div class="ld-dialog--close-cont">
                    <button onClick=${this.__closeDialog} class="ld-dialog--close">
                      ${close}
                    </button>
                  </div>
                </div>
                <div class="ld-dialog--content">
                  ${this.state.dialog.template}
                </div>
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
    const iso2 = router.url.searchParams.get('iso2');

    if (country && iso2) {
      this.setState({
        dialog: {
          opened: true,
          template: html`
            <${CountryInfo} country=${country} iso2=${iso2} />
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
    const clickedOutside = !e.composedPath().includes(this.dialogRef);
    if (clickedOutside) {
      this.__closeDialog();
    }
  }

  __closeCountryInfo() {
    router.setSearchParam('country', undefined);
    router.setSearchParam('iso2', undefined);
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

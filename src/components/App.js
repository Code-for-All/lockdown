import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { WorldMap } from './WorldMap.js';
import { Header } from './Header.js';
import { Totals } from './Totals.js';
import { Menu } from './Menu.js';
import { Lazy } from './Lazy.js';
import { router } from '../router.js';

const styles = css`
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

export class App extends Component {
  constructor() {
    super();
    this.state = { dialog: { opened: false, template: {}, title: '' } };

    this.__onPathChanged = this.__onPathChanged.bind(this);
    this.__closeCountryInfo = this.__closeCountryInfo.bind(this);
    this.__closeDialog = this.__closeDialog.bind(this);
    this.__showDialog = this.__showDialog.bind(this);
    this.__showDialogRoute = this.__showDialogRoute.bind(this);
  }

  async componentDidMount() {
    this.__onPathChanged();
    installMediaQueryWatcher(`(min-width: 960px)`, matches => {
      this.setState({ isMobile: !matches });
    });
  }

  componentWillMount() {
    router.addEventListener('path-changed', this.__onPathChanged);
  }

  componentWillUnmount() {
    router.removeEventListener('path-changed', this.__onPathChanged);
  }

  render() {
    return html`
      <${Header} />

      <div class=${styles}>
        <${Totals} />
      </div>

      <${WorldMap} />
      <${Menu} opened=${this.state.dialog.opened} changeRoute=${this.__showDialogRoute} close=${this.__closeDialog} />

      ${this.state.dialog.opened
        ? html`
            <${Lazy} component=${() => import('../components/Dialog.js')} props=${{ ...this.state.dialog, onClose: this.__closeDialog }} />
          `
        : ''}
    `;
  }

  __showDialogRoute({ template, title }) {
    const country = router.url.searchParams.get('country');
    if (country) {
      router.setPath(`${title}?country=${country}`);
    } else {
      router.setPath(title);
    }

    if (this.state.isMobile) {
      router.setSearchParam('country', null);
      this.__showDialog({ template, title });
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
            <${Lazy} component=${() => import('../components/CountryInfo.js')} props=${{ country, iso2 }} />
          `,
          title: country
        }
      });
    }
  }

  __showDialog({ template, title }) {
    this.setState({ dialog: { opened: true, template, title } });
  }

  __closeCountryInfo() {
    router.setSearchParam('country', undefined);
    router.setSearchParam('iso2', undefined);
  }

  __closeDialog() {
    this.setState({ dialog: { opened: false, template: '', title: '' } });
    this.__closeCountryInfo();
  }
}

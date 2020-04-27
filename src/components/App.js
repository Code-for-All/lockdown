import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import format from 'date-fns/format';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { WorldMap } from './WorldMap.js';
import { Header } from './Header.js';
import { Totals } from './Totals.js';
import { Menu } from './Menu.js';
import { Lazy } from './Lazy.js';
import { router } from '../router.js';
import { dialogService } from '../services/dialogService.js';
import { debounce } from 'lodash-es';
import TimeSlider from './TimeSlider';

const debouncedCloseDialog = debounce(
  () => {
    let status = {
      menuDialogClosed: false,
      countryDialogClosed: false,
    };

    const params = new URLSearchParams(location.search);
    if (params.has('country') || params.has('iso2')) {
      status.countryDialogClosed = true;
    } else {
      status.menuDialogClosed = true;
    }
    dialogService.close(status);
  },
  10,
  {
    leading: true,
    trailing: false,
  }
);

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

function toJsonString(date) {
  return format(date, 'yyyy-MM-dd');
}
export class App extends Component {
  constructor() {
    super();
    this.state = { dialog: { opened: false, template: {}, title: '' }, haveSelectedDate: false };

    this.__onPathChanged = this.__onPathChanged.bind(this);
    this.__closeCountryInfo = this.__closeCountryInfo.bind(this);
    this.__closeDialog = this.__closeDialog.bind(this);
    this.__showDialog = this.__showDialog.bind(this);
    this.__showDialogRoute = this.__showDialogRoute.bind(this);
    this.__onSelectDate = this.__onSelectDate.bind(this);
  }

  async componentDidMount() {
    this.__onPathChanged();
    installMediaQueryWatcher(`(min-width: 960px)`, (matches) => {
      this.setState({
        isMobile: !getMatchedCSSRules,
      });
    });
  }

  componentWillMount() {
    router.addEventListener('path-changed', this.__onPathChanged);
    this.setState({
      showStatsbox: Number(router.url.searchParams.get('statsbox') || 1) == 1,
      showMenu: Number(router.url.searchParams.get('menu') || 1) == 1,
      showSlider: Number(router.url.searchParams.get('slider') || 1) == 1,
    });
  }

  componentWillUnmount() {
    router.removeEventListener('path-changed', this.__onPathChanged);
  }

  render() {
    const selectedDate = this.state.haveSelectedDate ? toJsonString(this.state.haveSelectedDate) : toJsonString(new Date());
    return html`
      <${Header} selectedDate=${selectedDate} showStatsbox=${this.state.showStatsbox} />

      ${this.state.showStatsbox
        ? html`
            <div class=${styles}>
              <${Totals} />
            </div>
          `
        : ''}
      <div class=${styles}>
        <${Totals} selectedDate=${selectedDate} />
      </div>

      ${this.state.showMenu
        ? html`<${Menu} opened=${this.state.dialog.opened} isMobile=${this.state.isMobile} changeRoute=${this.__showDialogRoute} close=${this.__closeDialog} />`
        : ''}

      <${WorldMap} selectedDate=${selectedDate} />

      ${this.state.showSlider ? html`<${TimeSlider} onChange=${this.__onSelectDate} />` : ''}
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
    const date = this.state.haveSelectedDate || new Date();

    if (country && iso2) {
      this.setState({
        dialog: {
          opened: true,
          template: html` <${Lazy} component=${() => import('../components/CountryInfo.js')} props=${{ country, iso2, date }} /> `,
          title: country,
        },
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
    debouncedCloseDialog();
    this.__closeCountryInfo();
  }
  __onSelectDate(selectedDate) {
    this.setState({ haveSelectedDate: selectedDate });
  }
}

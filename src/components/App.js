import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import format from 'date-fns/format';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import WorldMap from './WorldMap.js';
import { Header } from './Header.js';
import Totals from './Totals.js';
import { Menu } from './Menu.js';
import { Lazy } from './Lazy.js';
import { router } from '../router.js';
import { dialogService } from '../services/dialogService.js';
import { debounce } from 'lodash-es';
import TimeSlider from './TimeSlider';
import Legend from './Legend.js';
import LanguageSelector from './LanguageSelector.js';
import translations from '../locale/index';

const FALLBACK_LANGUAGE = 'en';
const USE_PERFECT_LANGUAGE_MATCH = false;

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

function getCurrentLanguage(browserLanguage, languagesList) {
  let perfectMatch = languagesList.indexOf(browserLanguage);
  if (perfectMatch >= 0 && USE_PERFECT_LANGUAGE_MATCH) {
    return browserLanguage;
  } else {
    let baseLanguage = browserLanguage.split('-')[0];
    let baseLanguageMatch = languagesList.indexOf(baseLanguage);
    if (baseLanguageMatch >= 0) {
      return baseLanguage;
    } else {
      if (browserLanguage.includes('-TW') || browserLanguage.includes('-tw')) return 'zh-HK';
      let poorMatch = languagesList.filter((language) => language.split('-')[0].contains(baseLanguage));
      return poorMatch.length > 0 ? poorMatch[0] : FALLBACK_LANGUAGE;
    }
  }
}
export class App extends Component {
  constructor() {
    super();
    this.state = {
      dialog: { opened: false, template: {}, title: '' },
      haveSelectedDate: false,
      startDate: false,
      endDate: false,
      currentLanguage: { t: (text) => text },
      languages: [],
      baseLanguages: [],
    };

    this.__onPathChanged = this.__onPathChanged.bind(this);
    this.__closeCountryInfo = this.__closeCountryInfo.bind(this);
    this.__closeDialog = this.__closeDialog.bind(this);
    this.__showDialog = this.__showDialog.bind(this);
    this.__showDialogRoute = this.__showDialogRoute.bind(this);
    this.__onSelectDate = this.__onSelectDate.bind(this);
    this.__initi18n = this.__initi18n.bind(this);
    this.__getTranslation = this.__getTranslation.bind(this);
    this.__onLocateChange = this.__onLocateChange.bind(this);
  }

  async componentDidMount() {
    this.__onPathChanged();
    // TODO: Delete when the pwa code was remove
    // installMediaQueryWatcher(`(min-width: 960px)`, (matches) => {
    //   this.setState({
    //     isMobile: !getMatchedCSSRules,
    //   });
    // });
  }

  componentWillMount() {
    router.addEventListener('path-changed', this.__onPathChanged);
    if (window.i18n) {
      this.__initi18n();
    } else {
      setTimeout(this.__initi18n, 300);
    }
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
      ${this.state.showStatsbox
        ? html`
            <${Header}
              selectedDate=${selectedDate}
              showStatsbox=${this.state.showStatsbox}
              startDate=${this.state.startDate}
              endDate=${this.state.endDate}
              show=${!this.state.dialog.opened}
              i18n=${this.state.currentLanguage}
            />
            ${!this.state.dialog.opened
              ? html`<div class=${styles}>
                  <${Totals}
                    selectedDate=${selectedDate}
                    startDate=${this.state.startDate}
                    endDate=${this.state.endDate}
                    i18n=${this.state.currentLanguage}
                    onLocateChange=${this.__onLocateChange}
                  />
                </div>`
              : ''}
          `
        : ''}
      ${this.state.showMenu
        ? html`<${Menu}
            opened=${this.state.dialog.opened}
            isMobile=${this.state.isMobile}
            changeRoute=${this.__showDialogRoute}
            close=${this.__closeDialog}
            locale=${this.state.currentLanguage}
            onLocateChange=${this.__onLocateChange}
          />`
        : ''}

      <${WorldMap}
        selectedDate=${selectedDate}
        startDate=${this.state.startDate}
        endDate=${this.state.endDate}
        currentLanguage=${this.state.currentLanguage}
      />
      <${Legend} i18n=${this.state.currentLanguage} />
      <${LanguageSelector}
        i18n=${this.state.currentLanguage}
        languages=${this.state.baseLanguages}
        onLocateChange=${this.__onLocateChange}
      />

      ${this.state.showSlider
        ? html`<${TimeSlider} onChange=${this.__onSelectDate} i18n=${this.state.currentLanguage}
            >${this.state.dialog.opened
              ? html`
                  <${Lazy}
                    component=${() => import('../components/CountryInfo.js')}
                    props=${{
                      country: this.state.dialog.title,
                      iso2: this.state.dialog.iso2,
                      wikidata: this.state.dialog.wikidata,
                      date: this.state.haveSelectedDate || new Date(),
                      i18n: this.state.currentLanguage,
                      startDate: this.state.startDate,
                      endDate: this.state.endDate,
                      onClose: this.__closeDialog,
                    }}
                  />
                `
              : ''}<//
          >`
        : ''}
      <!--${this.state.dialog.opened
        ? html`
            <${Lazy} component=${() => import('../components/Dialog.js')} props=${{ ...this.state.dialog, onClose: this.__closeDialog }} />
          `
        : ''}-->
    `;
  }

  async __initi18n() {
    let userLang = navigator.language || navigator.userLanguage;
    let i18n = window.i18n;
    let translationsObject = await translations();
    let languages = Object.keys(translationsObject);
    let i18nLanguages = {};
    let baseLanguages = [];
    languages.forEach((language) => {
      if (!language.includes('-')) {
        baseLanguages.push(language);
      } else {
        if (language.includes('zh-')) baseLanguages.push(language);
      }
      i18nLanguages[language] = {
        t: this.__getTranslation,
        i18n: i18n.create({
          values: translationsObject[language],
        }),
        locale: language,
      };
    });
    let currentLanguage = getCurrentLanguage(userLang, languages);
    this.setState({
      i18nLanguages,
      currentLanguage: i18nLanguages[currentLanguage],
      languages,
      baseLanguages,
    });
  }
  __getTranslation(key) {
    let formatedKey = key.split('.').join('_');
    return this.state.currentLanguage.i18n(formatedKey);
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
    const wikidata = router.url.searchParams.get('wikidata');
    const date = this.state.haveSelectedDate || new Date();

    if (country && iso2) {
      this.setState({
        dialog: {
          opened: true,
          template: html`
            <${Lazy} component=${() => import('../components/CountryInfo.js')} props=${{ country, iso2, date, wikidata }} />
          `,
          title: country,
          iso2: iso2,
          date: date,
          wikidata: wikidata,
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
    router.setSearchParam('wikidata', undefined);
  }

  __closeDialog() {
    this.setState({ dialog: { opened: false, template: '', title: '' } });
    debouncedCloseDialog();
    this.__closeCountryInfo();
  }
  __onSelectDate(selectedDate, startDate, endDate) {
    this.setState({ haveSelectedDate: selectedDate, startDate, endDate });
  }
  __onLocateChange(newLocal) {
    // newLocal = getCurrentLanguage(newLocal);
    if (newLocal.substring(0, 2) === 'ar') {
      document.getElementById('app').className = 'rtl';
    } else {
      document.getElementById('app').className = '';
    }
    if (this.state.i18nLanguages[newLocal]) {
      this.setState({
        currentLanguage: this.state.i18nLanguages[newLocal],
      });
    }
  }
}

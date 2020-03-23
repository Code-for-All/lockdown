import { html } from 'htm/preact';
import { Component } from 'preact';
import { WorldMap } from '../components/WorldMap.js';
import { CountryInfo } from '../components/CountryInfo.js';
import { Totals } from '../components/Totals.js';
import { router } from '../router.js';
import { Menu } from '../components/Menu.js';

export class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      location: {}
    };
    this.__onPathChanged = this.__onPathChanged.bind(this);
    this.__closeCountryInfo = this.__closeCountryInfo.bind(this);
  }

  async componentDidMount() {
    const countriesData = await (await fetch(new URL('../../data/datafile.json', import.meta.url))).json();
    this.setState({ countriesData });
    this.__onPathChanged();
  }

  componentWillMount() {
    router.addEventListener('path-changed', this.__onPathChanged);
  }

  componentWillUnmount() {
    router.removeEventListener('path-changed', this.__onPathChanged);
  }

  render() {
    if (!this.state.countriesData) {
      // Loading state here
      return html`
        <div></div>
      `;
    }

    return html`
      <div class="ld-main-page--totals">
        <${Totals} />
      </div>

      <${Menu} />

      <${WorldMap} countriesData=${this.state.countriesData} />

      ${this.state.selectedCountry
        ? html`
            <${CountryInfo}
              country=${this.state.selectedCountry}
              countryData=${this.state.countriesData[this.state.selectedCountry]}
              close=${this.__closeCountryInfo}
            />
          `
        : null}
    `;
  }

  __onPathChanged() {
    this.setState({
      selectedCountry: router.url.searchParams.get('country')
    });
  }

  __closeCountryInfo() {
    router.setSearchParam('country', undefined);
  }
}

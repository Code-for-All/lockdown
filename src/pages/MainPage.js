import { html } from 'htm/preact';
import { Component } from 'preact';
import { WorldMap } from '../components/WorldMap.js';
import { CountryInfo } from '../components/CountryInfo.js';
import { router } from '../router.js';

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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleGeolocation.bind(this));
    }
  }

  componentWillMount() {
    router.addEventListener('path-changed', this.__onPathChanged);
  }

  componentWillUnmount() {
    router.removeEventListener('path-changed', this.__onPathChanged);
  }

  handleGeolocation(pos) {
    const { latitude, longitude } = pos.coords;
    localStorage.setItem('geolocation', `${latitude},${longitude}`);
    this.setState({
      location: {
        latitude,
        longitude
      }
    });
  }

  render(_, { location }) {
    if (!this.state.countriesData) {
      // Loading state here
      return html``;
    }

    return html`
      <${WorldMap} countriesData=${this.state.countriesData} location=${location} />

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

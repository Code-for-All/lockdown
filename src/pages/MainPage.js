import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { WorldMap } from '../components/WorldMap.js';
import { CountryInfo } from '../components/CountryInfo.js';
import { Totals } from '../components/Totals.js';
import { router } from '../router.js';
import { Menu } from '../components/Menu.js';

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

export class MainPage extends Component {
  constructor() {
    super();
    this.state = { location: {} };
    this.__onPathChanged = this.__onPathChanged.bind(this);
    this.__closeCountryInfo = this.__closeCountryInfo.bind(this);
  }

  async componentDidMount() {
    this.__onPathChanged();
  }

  componentWillMount() {
    router.addEventListener('path-changed', this.__onPathChanged);
  }

  componentWillUnmount() {
    router.removeEventListener('path-changed', this.__onPathChanged);
  }

  render(_, { selectedCountry }) {
    return html`
      <div class=${totalsStyles}>
        <${Totals} />
      </div>

      <${WorldMap} />
      <${Menu} />

      ${this.state.selectedCountry
        ? html`
            <${CountryInfo} country=${selectedCountry} close=${this.__closeCountryInfo} />
          `
        : null}
    `;
  }

  __onPathChanged() {
    const selectedCountry = router.url.searchParams.get('country');
    this.setState({ selectedCountry });
  }

  __closeCountryInfo() {
    router.setSearchParam('country', undefined);
  }
}

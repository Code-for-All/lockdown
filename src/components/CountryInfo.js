import { html } from 'htm/preact';
import { Component } from 'preact';
import format from 'date-fns/format';
import { coronaTrackerService, populationService, countryDetailService } from '../services/services';
import {
  home,
  citymovement,
  religion,
  work,
  military,
  academia,
  shops,
  electricity,
  water,
  internet,
  close as closeIcon,
} from '../assets/icons/icons.js';
import { offline, loading, travelFlight, travelLand, travelSea } from '../assets/icons/icons.js';
import { offlineStyles, loadingStyles } from '../style/shared.styles.js';
import { countryInfoStyles, tabStyles, reports } from './CountryInfo.styles.js';
import './tool-tip.js';

const TRAVEL = {
  '1': 'YES',
  '2': 'PARTIALLY',
  '3': 'NO',
  '4': 'UNCLEAR',
  '5': 'NA',
};

const MEASURE_VALUES = {
  '1': 'YES',
  '2': 'PARTIAL',
  '3': 'NO',
  '4': 'UNCLEAR',
};

const TRAVELTYPE = ['Land', 'Flight', 'Sea'];

const TRANSLATIONS = {
  commerce: {
    text: 'Commerce',
  },
  foreigners_inbound: {
    text: 'Foreigners (in)',
  },
  foreigners_outbound: {
    text: 'Foreigners (out)',
  },
  local: {
    text: 'In between cities',
  },
  nationals_inbound: {
    text: 'Nationals (in)',
  },
  nationals_outbound: {
    text: 'Nationals (out)',
  },
  stopovers: {
    text: 'Stopovers',
  },
  cross_border_workers: {
    text: 'Cross border workers',
  },
};

const MEASURES = [
  {
    id: 'lockdown_status',
    label: 'Stay Home',
    icon: home,
  },
  {
    id: 'going_to_shops',
    label: 'Shopping',
    icon: shops,
  },
  {
    id: 'city_movement_restriction',
    label: 'Outdoors',
    icon: citymovement,
  },
  {
    id: 'military_not_deployed',
    label: 'Military',
    icon: military,
  },
  {
    id: 'attending_religious_sites',
    label: 'Religious Sites',
    icon: religion,
  },
  {
    id: 'electricity_nominal',
    label: 'Electricity',
    icon: electricity,
  },
  {
    id: 'going_to_work',
    label: 'Go to Work',
    icon: work,
  },
  {
    id: 'water_nominal',
    label: 'Water',
    icon: water,
  },
  {
    id: 'academia_allowed',
    label: 'Go to Schools',
    icon: academia,
  },
  {
    id: 'internet_nominal',
    label: 'Telecom',
    icon: internet,
  },
];

const tabs = [
  {
    id: 1,
    name: 'Common Details',
  },
  {
    id: 2,
    name: 'Travel Details',
  },
  {
    id: 3,
    name: 'Reports',
  },
];

function createMeasures(apiMeasures) {
  return MEASURES.map((measure) => {
    const apiData = apiMeasures?.find((m) => m.label === measure.id);

    return {
      ...measure,
      value: MEASURE_VALUES[apiData.value] ?? MEASURE_VALUES[4],
    };
  });
}

export default class CountryInfo extends Component {
  constructor(props) {
    super(props);
    this.changeTab = this.changeTab.bind(this);
    this.state = {
      currentTab: 1,
    };
  }
  async componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({
        countryDetails: await countryDetailService.getDetails({ iso2: this.props.iso2, date: this.props.date }),
      });
    }
  }
  async componentWillMount() {
    this.setState({
      coronaData: await coronaTrackerService.getCountry({ iso2: this.props.iso2 }),
      populationData: await populationService.getPopulation(),
      countryDetails: await countryDetailService.getDetails({ iso2: this.props.iso2, date: this.props.date }),
    });
  }

  changeTab(newTab) {
    this.setState({
      currentTab: newTab,
    });
  }

  render(_, { coronaData, populationData, countryDetails }) {
    /** If the user is offline, and theres no response, or the response has failed */
    if (!navigator.onLine) {
      if (coronaData?.status !== 'success' || populationData?.data?.status !== 'success' || countryDetails?.status !== 'success') {
        return html`
          <div class="countryInfo ${offlineStyles}">
            ${offline}
            <b>You are not connected to the internet</b>
            <p>Information for this country can't be displayed because you are currently offline. Please check your internet connection.</p>
          </div>
        `;
      }
    }

    /** If there is no data available but the user is online, show loading state */
    if (!coronaData && !populationData && !countryDetails && navigator.onLine) {
      return html`
        <div class="countryInfo loader ${loadingStyles}">
          ${loading}
        </div>
      `;
    }

    /** On error & on succes, continue to render */
    return html`
      <div class=${tabStyles}>
        ${tabs.map(
          (tab) =>
            html`<div onClick=${() => this.changeTab(tab.id)} class="tab ${this.state.currentTab === tab.id ? 'active' : ''}">
              ${tab.name}
            </div>`
        )}
        <button onClick=${this.props.onClose}>${closeIcon}</button>
      </div>
      <div class="countryInfo ${countryInfoStyles}">
        ${this.state.currentTab === 1
          ? html`<${CountryDetails}
              date=${this.props.date}
              country=${this.props.country}
              coronaData=${coronaData}
              populationData=${populationData?.data[this.props.iso2]}
              countryDetails=${countryDetails}
            />`
          : this.state.currentTab === 2
          ? html`<${TransportDetails} countryDetails=${countryDetails} />`
          : html`<${Reports} />`}
      </div>
    `;
  }
}

class CountryDetails extends Component {
  render(_) {
    let { coronaData, populationData, countryDetails, country, date } = this.props;
    return html`<h2 class="ld-font-subheader"><span>${country}</span> <span>${format(date, 'dd/mm/yyyy')}</span></h2>
      <dl class="data">
        <div class="data-entry is-half">
          <dt>Population</dt>
          <dd class="data-value">${Number(populationData?.Population).toLocaleString() ?? 'Error'}</dd>
        </div>
        <div class="data-entry is-half">
          <dt>Max assembly</dt>
          <dd class="data-value">${countryDetails?.max_gathering ?? 'Unknown'}</dd>
        </div>
        <div class="data-entry is-third">
          <dt>Cases</dt>
          <dd class="data-value">${Number(coronaData?.totalConfirmed).toLocaleString() ?? 'Error'}</dd>
        </div>
        <div class="data-entry is-third">
          <dt>Recoveries</dt>
          <dd class="data-value">${Number(coronaData?.totalRecovered).toLocaleString() ?? 'Error'}</dd>
        </div>
        <div class="data-entry is-third">
          <dt>Deaths</dt>
          <dd class="data-value">${Number(coronaData?.totalDeaths).toLocaleString() ?? 'Error'}</dd>
        </div>
      </dl>

      <${Legends} />

      ${countryDetails.status === 'success'
        ? html`
            <h2 class="ld-font-subheader last">Daily life (restrictions)</h2>
            <ul class="measures">
              ${createMeasures(countryDetails.measures).map(
                (m) =>
                  html`
                    <li>
                      <div class="measure-wrapper">
                        <div
                          aria-labelledby="measure-label-${m.id}"
                          class="measure measure-${m.value}"
                          aria-label="${m.value.toLowerCase()}"
                        >
                          ${m.icon}
                        </div>
                        <span id="measure-label-${m.id}" class="measure-label">${m.label}</span>
                      </div>
                    </li>
                  `
              )}
            </ul>
          `
        : html`
            <div class="dialog">
              <h2>Measures</h2>
              Failed to get data for this country.
            </div>
          `}`;
  }
}

class TransportDetails extends Component {
  render(_) {
    let { countryDetails } = this.props;
    return html`${countryDetails.status === 'success'
      ? html`
          <br />
          <br />
          <${Legends} />
          <h2 class="ld-font-subheader last">Transport (restrictions)</h2>
          <dl>
            <div class="ld-travel">
              <dt></dt>
              <div class="ld-travel--values">
                <dd class="ld-travel--val-icon">${travelLand}</dd>
                <dd class="ld-travel--val-icon">${travelFlight}</dd>
                <dd class="ld-travel--val-icon">${travelSea}</dd>
              </div>
            </div>
            ${Object.keys(countryDetails.travel).map((key, j) => {
              return html`
                <div class="ld-travel">
                  <dt>${TRANSLATIONS[key].text}</dt>
                  <div class="ld-travel--values">
                    ${countryDetails.travel[key].map(
                      (val, i) =>
                        html`
                          <dd
                            aria-label="${TRAVELTYPE[i]}: ${TRAVEL[val]?.toLowerCase() ?? TRAVEL[4].toLowerCase()}"
                            data-tooltip="${TRAVEL[val]?.toLowerCase() ?? TRAVEL[4].toLowerCase()}"
                            class="ld-travel--symbol ld-travel--val-${TRAVEL[val] ?? TRAVEL[5]}"
                          ></dd>
                        `
                    )}
                  </div>
                </div>
              `;
            })}
          </dl>
        `
      : html`<div class="dialog">
          <h2>Measures</h2>
          Failed to get data for this country.
        </div> `}`;
  }
}

class Legends extends Component {
  render(_) {
    return html`<div class="legend ld-font-legend">
      <dl>
        <div class="legend-item">
          <dt class="legend-green" aria-label="green"></dt>
          <dd>None</dd>
        </div>
        <div class="legend-item">
          <dt class="legend-yellow" aria-label="yellow"></dt>
          <dd>Partial</dd>
        </div>
        <div class="legend-item">
          <dt class="legend-red" aria-label="red"></dt>
          <dd>Total</dd>
        </div>
        <div class="legend-item">
          <dt class="legend-gray" aria-label="gray"></dt>
          <dd>Unclear</dd>
        </div>
      </dl>
    </div>`;
  }
}

class Reports extends Component {
  render(_) {
    return html`<div class="${reports}"><h3>Coming Soon..</h3></div>`;
  }
}

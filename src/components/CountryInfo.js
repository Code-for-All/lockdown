import { html } from 'htm/preact';
import { Component } from 'preact';
import { coronaTrackerService, populationService, countryDetailService } from '../services/services';
import { home, citymovement, religion, work, military, academia, shops, electricity, water, internet } from '../assets/icons/icons.js';
import { offline, loading, travelFlight, travelLand, travelSea } from '../assets/icons/icons.js';
import { offlineStyles, loadingStyles } from '../style/shared.styles.js';
import { countryInfoStyles } from './CountryInfo.styles.js';
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
    label: 'Home reclusion',
    icon: home,
  },
  {
    id: 'city_movement_restriction',
    label: 'Outdoor activities',
    icon: citymovement,
  },
  {
    id: 'attending_religious_sites',
    label: 'Access to religious sites',
    icon: religion,
  },
  {
    id: 'going_to_work',
    label: 'Access to work',
    icon: work,
  },
  {
    id: 'military_not_deployed',
    label: 'Military presence',
    icon: military,
  },
  {
    id: 'academia_allowed',
    label: 'Access to schools',
    icon: academia,
  },
  {
    id: 'going_to_shops',
    label: 'Shopping',
    icon: shops,
  },
  {
    id: 'electricity_nominal',
    label: 'Electricity',
    icon: electricity,
  },
  {
    id: 'water_nominal',
    label: 'Water',
    icon: water,
  },
  {
    id: 'internet_nominal',
    label: 'Telecom',
    icon: internet,
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
  async componentWillMount() {
    this.setState({
      coronaData: await coronaTrackerService.getCountry({ iso2: this.props.iso2 }),
      populationData: await populationService.getPopulation(),
      countryDetails: await countryDetailService.getDetails({ iso2: this.props.iso2 }),
    });
  }

  render(_, { coronaData, populationData, countryDetails }) {
    /** If the user is offline, and theres no response, or the response has failed */
    if (!navigator.onLine) {
      if (coronaData?.status !== 'success' || populationData?.data?.status !== 'success' || countryDetails?.status !== 'success') {
        return html`
          <div class="${offlineStyles}">
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
        <div class="${loadingStyles}">
          ${loading}
        </div>
      `;
    }

    /** On error & on succes, continue to render */
    return html`
      <div class=${countryInfoStyles}>
        <dl class="data">
          <div class="data-entry">
            <dt>Date</dt>
            <dd class="data-value">${countryDetails.date}</dd>
          </div>
          <div class="data-entry">
            <dt>Population</dt>
            <dd class="data-value">${Number(populationData?.data?.[this.props.iso2]?.Population).toLocaleString() ?? 'Error'}</dd>
          </div>
          <div class="data-entry">
            <dt>Max assembly</dt>
            <dd class="data-value">${countryDetails?.max_gathering ?? 'Unknown'}</dd>
          </div>
          <div class="data-entry">
            <dt>Reported cases</dt>
            <dd class="data-value">${Number(coronaData?.totalConfirmed).toLocaleString() ?? 'Error'}</dd>
          </div>
          <div class="data-entry">
            <dt>Reported recoveries</dt>
            <dd class="data-value">${Number(coronaData?.totalRecovered).toLocaleString() ?? 'Error'}</dd>
          </div>
          <div class="data-entry">
            <dt>Reported deaths</dt>
            <dd class="data-value">${Number(coronaData?.totalDeaths).toLocaleString() ?? 'Error'}</dd>
          </div>
        </dl>

        <div class="legend ld-font-legend">
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
        </div>

        ${countryDetails.status === 'success'
          ? html`
              <h2 class="ld-font-subheader">Daily life (restrictions)</h2>
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

              <h2 class="ld-font-subheader">Transport (restrictions)</h2>
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
          : html`
              <div class="dialog">
                <h2>Measures</h2>
                Failed to get data for this country.
              </div>
            `}
      </div>
    `;
  }
}

import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { lockdownsService } from '../services/locksdownsService.js';
import { travelAdviceService } from '../services/travelAdviceService.js';
import { coronaTrackerService } from '../services/coronaTrackerService.js';
import { populationService } from '../services/populationService.js';
import { countryDetailService } from '../services/countryDetailService.js';
import {
  offline,
  loading,
  travelFlight,
  travelLand,
  travelSea,
  lockdown,
  citymovement,
  religion,
  work,
  military,
  academia,
  shops,
  electricity,
  water,
  internet
} from '../assets/icons/icons.js';

const TRANSLATIONS = {
  commerce: 'Commerce',
  foreigners_inbound: 'Foreigners (in)',
  foreigners_outbound: 'Foreigners (out)',
  local: 'In between cities',
  nationals_inbound: 'Nationals (in)',
  nationals_outbound: 'Nationals (out)',
  stopovers: 'Stopovers',
  cross_border_workers: 'Cross border workers',
  lockdown_status: 'Lockdown status',
  city_movement_restriction: 'City movement restriction',
  attending_religious_sites: 'Religion',
  going_to_work: 'Work',
  military_not_deployed: 'Military not deployed',
  academia_allowed: 'Academia allowed',
  going_to_shops: 'Going to shops',
  electricity_nominal: 'Electricity working',
  water_nominal: 'Water working',
  internet_nominal: 'Internet working'
};

const TRAVEL = {
  '1': 'YES',
  '2': 'PARTIALLY',
  '3': 'NO',
  '4': 'UNCLEAR',
  '5': 'NA'
};

const MEASURES = {
  '1': 'YES',
  '2': 'PARTIAL',
  '3': 'NO',
  '4': 'UNCLEAR'
};

const MEASUREICONS = {
  lockdown_status: lockdown,
  city_movement_restriction: citymovement,
  attending_religious_sites: religion,
  going_to_work: work,
  military_not_deployed: military,
  academia_allowed: academia,
  going_to_shops: shops,
  electricity_nominal: electricity,
  water_nominal: water,
  internet_nominal: internet
};

const TRAVELTYPE = ['Land', 'Flight', 'Sea'];

const styles = css`
  & {
    align-items: center;
  }

  .dialog {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 16px;
    border-radius: 8px;
    width: 100%;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

  h2 {
    margin-top: 0px;
  }

  .data-entry {
    display: flex;
  }

  p {
    margin: 0;
  }

  p:first-of-type {
    flex: 1;
  }

  p:last-of-type {
    font-weight: 700;
    color: var(--ld-text);
  }

  ul {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    list-style: none;
  }

  .ld-travel {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-travel p {
    flex-basis: 30%;
    flex-shrink: 0;
    font-weight: 300;
  }

  .ld-travel--val-icon {
    fill: var(--ld-text);
  }

  .ld-travel--val-YES {
    background-color: #9fc184;
  }
  .ld-travel--val-PARTIALLY {
    background-color: #769de2;
  }
  .ld-travel--val-NO {
    background-color: #d36d6b;
  }
  .ld-travel--val-UNCLEAR {
    background-color: #ebb577;
  }
  .ld-travel--val-NA {
    background-color: #828282;
  }

  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  .ld-travel--values {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .data-value {
    color: grey;
  }

  .travel-advice {
    padding: 16px;
  }

  .ld-contribute {
    text-align: center;
  }

  .ld-measures {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-measures-YES {
    background-color: #9fc184;
  }
  .ld-measures-PARTIAL {
    background-color: #769de2;
  }
  .ld-measures-NO {
    background-color: #d36d6b;
  }
  .ld-measures-UNCLEAR {
    background-color: #828282;
  }

  .ld-measures-key {
    flex: 1;
  }

  .ld-measures-icon svg {
    margin-right: 20px;
    width: 20px;
    height: 20px;
    fill: var(--ld-text);
  }

  .ld-measures-value {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`;

const offlineStyles = css`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: calc(100% - 60px);
  }

  svg {
    width: 120px;
    margin-bottom: 20px;
  }
`;

const loadingStyles = css`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    height: calc(100% - 60px);
  }

  svg {
    width: 120px;
    height: 120px;
    animation: rotate 2000ms linear infinite;
    transform-origin: center center;
    margin: auto;
  }

  circle {
    stroke-dasharray: 85, 200;
    /* 0px is requires for edge 15 and lower */
    stroke-dashoffset: 0px;
    animation: dash 2000ms ease-in-out infinite;
    stroke-linecap: round;
    stroke-width: var(--spinner-stroke-width, 4px);
    stroke-miterlimit: 10;
    fill: none;
    stroke: #828282;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      /* 0px is requires for edge 15 and lower */
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  /* Animating SVG does not work on IE11. Use a fallback animation. */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    svg {
      animation-duration: 1500ms;
    }

    circle {
      stroke-linecap: square;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation-duration: 20000ms;
    }

    circle {
      animation: dash 20000ms ease-in-out infinite;
    }
  }
`;

export default class CountryInfo extends Component {
  async componentWillMount() {
    this.setState({
      lockdowns: await lockdownsService.getLockdowns(),
      travelAdvice: await travelAdviceService.getAdvice({ iso2: this.props.iso2 }),
      coronaData: await coronaTrackerService.getCountry({ iso2: this.props.iso2 }),
      populationData: await populationService.getPopulation(),
      countryDetails: await countryDetailService.getDetails({ iso2: this.props.iso2 })
    });
  }

  render(_, { lockdowns, travelAdvice, coronaData, populationData, countryDetails }) {
    /** If the user is offline, and theres no response, or the response has failed */
    if (!navigator.onLine) {
      if (
        travelAdvice?.status !== 'success' ||
        coronaData?.status !== 'success' ||
        populationData?.data?.status !== 'success' ||
        countryDetails?.status !== 'success'
      ) {
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
    if (!lockdowns && !travelAdvice && !coronaData && !populationData && !countryDetails && navigator.onLine) {
      return html`
        <div class="${loadingStyles}">
          ${loading}
        </div>
      `;
    }

    /** On error & on succes, continue to render */
    return html`
      <div class=${styles}>
        <hr />
        <div class="dialog">
          <h2>Stats</h2>
          <div class="data-entry">
            <p>Population:</p>
            <p class="data-value">${populationData?.data?.[this.props.iso2]?.Population ?? 'Error'}</p>
          </div>
          <div class="data-entry">
            <p>Confirmed cases:</p>
            <p class="data-value">${coronaData?.totalConfirmed ?? 'Error'}</p>
          </div>
          <div class="data-entry">
            <p>Confirmed deaths:</p>
            <p class="data-value">${coronaData?.totalDeaths ?? 'Error'}</p>
          </div>
          <div class="data-entry">
            <p>Confirmed recoveries:</p>
            <p class="data-value">${coronaData?.totalRecovered ?? 'Error'}</p>
          </div>
          <div class="data-entry">
            <p>Max gathering:</p>
            <p class="data-value">${countryDetails?.max_gathering ?? 'Error'}</p>
          </div>
        </div>
        <hr />
        <div class="dialog">
          <h2>Measures</h2>
          <ul>
            ${countryDetails.measures.map(({ label, value }) => {
              return html`
                <li class="ld-measures">
                  <span class="ld-measures-icon">${MEASUREICONS[label]}</span>
                  <span class="ld-measures-key">${TRANSLATIONS[label]}:</span>
                  <span class="ld-measures-value ld-measures-${MEASURES[value]}"></span>
                </li>
              `;
            })}
          </ul>
        </div>
        <hr />
        <div class="dialog">
          <h2>Travel</h2>
          <ul>
            <li>
              <ul class="ld-travel">
                <p></p>
                <div class="ld-travel--values">
                  <li class="ld-travel--symbol ld-travel--val-icon">${travelLand}</li>
                  <li class="ld-travel--symbol ld-travel--val-icon">${travelFlight}</li>
                  <li class="ld-travel--symbol ld-travel--val-icon">${travelSea}</li>
                </div>
              </ul>
            </li>
            ${Object.keys(countryDetails.travel).map(key => {
              return html`
                <li>
                  <ul class="ld-travel">
                    <p>${TRANSLATIONS[key]}</p>
                    <div class="ld-travel--values">
                      ${countryDetails.travel[key].map(
                        (val, i) =>
                          html`
                            <li class="ld-travel--symbol ld-travel--val-${TRAVEL[val]}">
                              <p class="sr-only">${TRAVELTYPE[i]}: ${TRAVEL[val]}</p>
                            </li>
                          `
                      )}
                    </div>
                  </ul>
                </li>
              `;
            })}
          </ul>
        </div>
        <hr />
        <div class="dialog">
          <h2>Travel advice</h2>
          ${travelAdvice.status === 'success'
            ? html`
                <span><b>${travelAdvice.score}</b><br />${travelAdvice.advice}</span>
              `
            : 'Error'}
        </div>
        <hr />
        <div class="dialog ld-contribute">
          <a
            class="ld-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform"
          >
            Improve this data
          </a>
        </div>
      </div>
    `;
  }
}

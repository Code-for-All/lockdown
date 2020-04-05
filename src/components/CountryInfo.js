import { html } from 'htm/preact';
import { Component } from 'preact';
import { lockdownsService, travelAdviceService, coronaTrackerService, populationService, countryDetailService } from '../services/services';
import { TRANSLATIONS } from '../assets/translations.js';
import { offline, loading, travelFlight, travelLand, travelSea } from '../assets/icons/icons.js';
import { countryDetailStyles, offlineStyles, loadingStyles } from '../style/styles.js';

const TRAVEL = {
  '1': 'YES',
  '2': 'PARTIALLY',
  '3': 'NO',
  '4': 'UNCLEAR',
  '5': 'NA',
};

const MEASURES = {
  '1': 'YES',
  '2': 'PARTIAL',
  '3': 'NO',
  '4': 'UNCLEAR',
};

const TRAVELTYPE = ['Land', 'Flight', 'Sea'];

export default class CountryInfo extends Component {
  async componentWillMount() {
    this.setState({
      lockdowns: await lockdownsService.getLockdowns(),
      travelAdvice: await travelAdviceService.getAdvice({ iso2: this.props.iso2 }),
      coronaData: await coronaTrackerService.getCountry({ iso2: this.props.iso2 }),
      populationData: await populationService.getPopulation(),
      countryDetails: await countryDetailService.getDetails({ iso2: this.props.iso2 }),
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
      <div class=${countryDetailStyles}>
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
        ${countryDetails.status === 'success'
          ? html`
              <div class="dialog">
                <h2>Measures</h2>
                <ul>
                  ${countryDetails.measures.map(({ label, value }, i) => {
                    return html`
                      <li class="ld-measures">
                        <span class="ld-measures-icon">${TRANSLATIONS[label].icon}</span>
                        <span class="ld-measures-key">${TRANSLATIONS[label].text}:</span>
                        <span class="ld-measures-value ld-measures-${MEASURES[value]}">
                          <p class="sr-only">${MEASURES[value].toLowerCase()}</p>
                        </span>
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
                  ${Object.keys(countryDetails.travel).map((key) => {
                    return html`
                      <li>
                        <ul class="ld-travel">
                          <p>${TRANSLATIONS[key].text}</p>
                          <div class="ld-travel--values">
                            ${countryDetails.travel[key].map(
                              (val, i) =>
                                html`
                                  <li class="ld-travel--symbol ld-travel--val-${TRAVEL[val]}">
                                    <p class="sr-only">${TRAVELTYPE[i]}: ${TRAVEL[val].toLowerCase()}</p>
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
            `
          : html`
              <div class="dialog">
                <h2>Measures</h2>
                Failed to get data for this country.
              </div>
            `}
        <hr />
        <div class="dialog">
          <h2>Travel advice</h2>
          ${travelAdvice.status === 'success' ? html` <span><b>${travelAdvice.score}</b><br />${travelAdvice.advice}</span> ` : 'Error'}
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

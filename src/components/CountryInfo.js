import { html } from 'htm/preact';
import { Component } from 'preact';
import { coronaTrackerService, populationService, countryDetailService } from '../services/services';
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
      <div class=${countryDetailStyles}>
        <hr />
        <div class="dialog">
          <h2>Stats</h2>
          <dl>
            <div class="data-entry">
              <dt>Population:</dt>
              <dd class="data-value">${populationData?.data?.[this.props.iso2]?.Population ?? 'Error'}</dd>
            </div>
            <div class="data-entry">
              <dt>Confirmed cases:</dt>
              <dd class="data-value">${coronaData?.totalConfirmed ?? 'Error'}</dd>
            </div>
            <div class="data-entry">
              <dt>Confirmed deaths:</dt>
              <dd class="data-value">${coronaData?.totalDeaths ?? 'Error'}</dd>
            </div>
            <div class="data-entry">
              <dt>Confirmed recoveries:</dt>
              <dd class="data-value">${coronaData?.totalRecovered ?? 'Error'}</dd>
            </div>
            <div class="data-entry">
              <dt>Max gathering:</dt>
              <dd class="data-value">${countryDetails?.max_gathering ?? 'Unknown'}</dd>
            </div>
          </dl>
        </div>
        <hr />
        ${countryDetails.status === 'success'
          ? html`
              <div class="dialog">
                <h2>Measures</h2>
                <dl>
                  ${countryDetails.measures.map(({ label, value }) => {
                    return html`
                      <div class="ld-measures-wrapper">
                        <dt class="ld-measures">
                          <span class="ld-measures-icon">${TRANSLATIONS[label].icon}</span>
                          <span class="ld-measures-key">${TRANSLATIONS[label].text}</span>
                        </dt>
                        <dd
                          aria-label="${MEASURES[value]?.toLowerCase() ?? MEASURES[4]}"
                          class="ld-measures-value ld-measures-${MEASURES[value] ?? MEASURES[4]}"
                        ></dd>
                      </div>
                    `;
                  })}
                </dl>
              </div>
              <hr />
              <div class="dialog">
                <h2>Travel</h2>
                <dl>
                  <div class="ld-travel">
                    <dt></dt>
                    <div class="ld-travel--values">
                      <dd class="ld-travel--symbol ld-travel--val-icon">${travelLand}</dd>
                      <dd class="ld-travel--symbol ld-travel--val-icon">${travelFlight}</dd>
                      <dd class="ld-travel--symbol ld-travel--val-icon">${travelSea}</dd>
                    </div>
                  </div>
                  ${Object.keys(countryDetails.travel).map((key) => {
                    return html`
                      <div class="ld-travel">
                        <dt>${TRANSLATIONS[key].text}</dt>
                        <div class="ld-travel--values">
                          ${countryDetails.travel[key].map(
                            (val, i) =>
                              html`
                                <dd
                                  aria-label="${TRAVELTYPE[i]}: ${TRAVEL[val]?.toLowerCase() ?? TRAVEL[4]}"
                                  class="ld-travel--symbol ld-travel--val-${TRAVEL[val] ?? TRAVEL[5]}"
                                ></dd>
                              `
                          )}
                        </div>
                      </div>
                    `;
                  })}
                </dl>
              </div>
            `
          : html`
              <div class="dialog">
                <h2>Measures</h2>
                Failed to get data for this country.
              </div>
            `}
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

import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { lockdownsService } from '../services/locksdownsService.js';
import { travelAdviceService } from '../services/travelAdviceService.js';
import { coronaTrackerService } from '../services/coronaTrackerService.js';

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

  .data-value {
    color: grey;
  }

  .travel-advice {
    padding: 16px;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`;

export class CountryInfo extends Component {
  async componentWillMount() {
    this.setState({
      lockdowns: await lockdownsService.getLockdowns(),
      travelAdvice: await travelAdviceService.getAdvice({ iso2: this.props.iso2 }),
      coronaData: await coronaTrackerService.getCountry({ iso2: this.props.iso2 })
    });
  }

  render(_, { lockdowns, travelAdvice, coronaData }) {
    if (!lockdowns && !travelAdvice && !coronaData) {
      return html`
        Loading...
      `;
    }

    return html`
      <div class=${styles}>
        <div class="dialog">
          <h2>Stats</h2>
          <div class="data-entry">
            <p>Population:</p>
            <p class="data-value">-</p>
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
            <p>Lockdown start:</p>
            <p class="data-value">-</p>
          </div>
          <div class="data-entry">
            <p>Lockdown end:</p>
            <p class="data-value">-</p>
          </div>
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
      </div>
    `;
  }
}

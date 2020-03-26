import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { lockdownsService } from '../services/locksdownsService.js';
import { travelAdviceService } from '../services/travelAdviceService.js';

const styles = css`
  & {
    /* display: flex; */
    /* justify-content: center; */
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
      travelAdvice: await travelAdviceService.getAdvice({iso2: this.props.iso2})
    });
  }

  render(_, { lockdowns, travelAdvice }) {
    if (!lockdowns) {
      return;
    }

    return html`
      <div class=${styles}>
        <div class="dialog">
          <div class="data-entry">Population: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Confirmed cases: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Confirmed deaths: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Lockdown start: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Lockdown end: <span class="data-value">Unknown</span></div>
        </div>
        <hr/>
        <div class="travel-advice">
          <span>Travel advice:</span><br/>
          <span><b>${travelAdvice.score}</b><br/> ${travelAdvice.advice}</span>
        </div>
      </div>
    `;
  }
}

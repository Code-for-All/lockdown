import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';
import { lockdownsService } from '../services/locksdownsService.js';

const styles = css`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog {
    background-color: white;
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

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`;

export class CountryInfo extends Component {
  async componentWillMount() {
    this.setState({
      lockdowns: await lockdownsService.getLockdowns()
    });
  }

  render(_, { lockdowns }) {
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
      </div>
    `;
  }
}

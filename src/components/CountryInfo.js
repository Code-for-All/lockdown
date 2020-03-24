import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';

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
  render() {
    return html`
      <div class=${styles}>
        <div class="dialog">
          <h1>${this.props.country}</h1>

          <div class="data-entry">Population: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Reported cases: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Reported deaths: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Lockdown start: <span class="data-value">Unknown</span></div>
          <div class="data-entry">Lockdown end: <span class="data-value">Unknown</span></div>
        </div>
      </div>
    `;
  }
}

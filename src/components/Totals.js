import { html } from 'htm/preact';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import css from 'csz';
import { Component } from 'preact';
import { totalsService } from '../services/totalsService.js';
import { format } from 'date-fns/esm';

const styles = css`
  dl {
    display: flex;
    height: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }

  dl div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 126px;
    margin: 5px 0;
  }

  dt {
    display: block;
  }

  dd {
    margin-left: 0px;
    display: block;
  }

  div:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: lightgrey;
  }
`;

export class Totals extends Component {
  constructor() {
    super();

    this.state = { totals: {} };
  }

  async componentWillMount() {
    installMediaQueryWatcher(`(min-width: 900px)`, (matches) => {
      this.setState({ desktop: matches });
    });
    const totals = await totalsService.getTotals();

    this.setState({
      totals: totals,
    });
  }

  render({ selectedDate }, { totals, desktop }) {
    const total = totals[selectedDate];
    const items = [
      {
        description: 'Countries in lockdown',
        value: Number(total?.territories.lockdown || 0).toLocaleString(),
      },
      {
        description: 'People affected',
        value: Number(total?.territories.affected || 0).toLocaleString(),
      },
      {
        description: html`Reported <br />cases`,
        value: Number(total?.corona.confirmed || 0).toLocaleString(),
      },
      {
        description: 'Reported deaths',
        value: Number(total?.corona.deaths || 0).toLocaleString(),
      },
    ];
    return html`
      <div class=${styles}>
        <dl>
          ${(desktop ? items : items.slice(0, 2)).map(
            (item) => html`
              <div>
                <dt class="ld-font-light">${item.description}</dt>
                <dd class="ld-font-front">${item.value}</dd>
              </div>
            `
          )}
        </dl>
      </div>
    `;
  }
}

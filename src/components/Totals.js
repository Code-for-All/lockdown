import { html } from 'htm/preact';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import css from 'csz';
import { Component } from 'preact';
import { totalsService } from '../services/totalsService.js';

const styles = css`
  .key {
    font-size: 10px;
    font-weight: 300;
  }

  .value {
    font-size: 20px;
    font-weight: 700;
  }

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 126px;
    padding: 0 16px;
    margin: 5px 0;
  }

  li:not(:last-of-type)::after {
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

    this.state = { items: [] };
  }

  async componentWillMount() {
    installMediaQueryWatcher(`(min-width: 900px)`, matches => {
      this.setState({ desktop: matches });
    });
    const totals = await totalsService.getTotals();
    const items = [
      {
        description: 'Countries in lockdown',
        value: '0'
      },
      {
        description: 'People affected',
        value: '0'
      },
      {
        description: 'Confirmed cases',
        value: totals.confirmed
      },
      {
        description: 'Confirmed deaths',
        value: totals.deaths
      }
    ];

    this.setState({
      items: items
    });
  }

  render(_, { items, desktop }) {
    return html`
      <div class=${styles}>
        <ul>
          ${(desktop ? items : items.slice(0, 2)).map(
            item => html`
              <li>
                <div class="key">${item.description}</div>
                <div class="value">${item.value}</div>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

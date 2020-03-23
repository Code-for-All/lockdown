import { Component } from 'preact';
import { html } from 'htm/preact';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

export class Totals extends Component {
  constructor() {
    super();

    this.state = { items: [] };
  }

  componentWillMount() {
    installMediaQueryWatcher(`(min-width: 900px)`, matches => {
      this.setState({ desktop: matches });
    });

    this.setState({
      items: [
        {
          description: 'Countries in lockdown',
          value: '123'
        },
        {
          description: 'People affected',
          value: '123'
        },
        {
          description: 'Reported infections',
          value: '123'
        },
        {
          description: 'Reported deaths',
          value: '123'
        }
      ]
    });
  }

  render(_, { items, desktop }) {
    return html`
      <div class="ld-totals">
        <ul>
          ${(desktop ? items : items.slice(0, 2)).map(
            item => html`
              <li>
                <div class="ld-totals--key">${item.description}</div>
                <div class="ld-totals--value">${item.value}</div>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

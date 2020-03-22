import { Component } from 'preact';
import { html } from 'htm/preact';

export class Totals extends Component {
  constructor() {
    super();
    this.setState({
      items: []
    });
  }

  componentWillMount() {
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

  render() {
    return html`
      <div class="ld-totals">
        <ul>
          ${this.state.items.map(
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

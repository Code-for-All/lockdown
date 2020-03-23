import { Component } from 'preact';
import { html } from 'htm/preact';

export class Totals extends Component {
  constructor() {
    super();
    this.state = { items: [] };

    const observer = matchMedia('(min-width: 900px)');
    observer.addEventListener('change', () => {
      this.setState({ desktop: observer.matches });
    });
    this.state = { desktop: observer.matches };
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
    const items = this.state.desktop ? this.state.items : this.state.items.slice(0, 2);
    return html`
      <div class="ld-totals">
        <ul>
          ${items.map(
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

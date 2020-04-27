import { html } from 'htm/preact';
import { Component } from 'preact';
import { Expandable } from './Expandable.js';
import { Ticker } from './Ticker.js';
import css from 'csz';
import { Settings } from './Settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import Tabs from '../components/Tabs.js';
import { close, trues } from '../assets/icons/icons.js';

const styles = css`
  & {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    border-collapse: collapse;
  }

  th {
    border-top: transparent;
    padding: 15px;
  }
  th:nth-child(1),
  th:nth-child(2) {
    border-left: transparent;
    border-right: 1px solid var(--ld-text);
    border-bottom: 1px solid var(--ld-text);
  }

  th:nth-child(3) {
    border-bottom: 1px solid var(--ld-text);
  }

  td:nth-child(1) {
    border-left: transparent;
    border-right: 1px solid var(--ld-text);
  }

  td:nth-child(2) {
    border-right: 1px solid var(--ld-text);
  }

  th,
  td:nth-child(3) {
    border-right: transparent;
  }
  td:nth-child(3),
  td:nth-child(2),
  td:nth-child(1) {
    border-bottom: 1px solid var(--ld-text);
  }
  tr {
    font-weight: 600;
    font-size: 14px;
    padding: 15px;
    border-top: transparent;
  }

  tr:last-of-type {
    td {
      border-bottom: transparent;
    }
  }

  .note {
    font-weight: 100;
    font-size: 12px;
  }

  td {
    text-align: center;
    padding: 15px;
    svg {
      stroke: var(--ld-text);
    }
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .default {
    background: #cccccc;
  }
  .blue {
    background: #7aaeff;
  }
  .red {
    background: #eb5757;
  }
  .yellow {
    background: #f2994a;
  }
  .green {
    background: #6fcf97;
  }
`;

const renderMenu = (menuItem) => {
  switch (menuItem) {
    case 'info':
      return {
        title: 'info',
        template: html`
          <h1>Lockdown</h1>
          <p class="ld-alpha">
            Project lockdown is currently in alpha. Not all data may be available yet.
          </p>
          <p>
            <b>Project Lockdown</b> provides a mapping of the different NPIs (Non-Pharmaceutical Interventions) enforced by across the globe in response to the COVID-19 crisis to visualize the success of different pandemic response measures, monitor effects on Human and Digital Rights, and clarify evaluation metrics.
          </p>

          <${Expandable}
            toggle=${'About'}
            detail=${html`
              <p>
                Lockdown, quarantine, and isolation measures have been implemented across the globe to reduce the spread of COVID-19 and reduce the strain on medical infrastructure. <b>Project Lockdown</b> empowers citizens, journalists, and Human Rights Defenderes to easily analyze the social and political effects of these measures. Founded on the values of transparency and accountability, <b>Project Lockdown</b> is committed to providing citizens of the world with the tools they need to stay safe and informed. 
              </p>
            `}
          />

          <${Expandable}
            toggle=${'Legend'}
            detail=${html`
              <p>The map shows two parameters for territories:</p>
              <ol>
                <li>If the country is under any type of lockdown</li>
                <li>If there are covid cases in the country</li>
              </ol>
              <table class=${styles}>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Lockdown</th>
                  <th scope="col">COVID-19</th>
                </tr>
                <tr>
                  <td scope="row"><div aria-label="blue" class="blue circle"></div></td>
                  <td><div aria-label="no">${close}</div></td>
                  <td><div aria-label="no">${close}</div></td>
                </tr>
                <tr>
                  <td scope="row"><div aria-label="green" class="green circle"></div></td>
                  <td><div aria-label="no">${close}</div></td>
                  <td><div aria-label="yes">${trues}</div></td>
                </tr>
                <tr>
                  <td scope="row"><div aria-label="yellow" class="yellow circle"></div></td>
                  <td><div aria-label="yes">${trues}</div></td>
                  <td><div aria-label="no">${close}</div></td>
                </tr>
                <tr>
                  <td scope="row"><div aria-label="red" class="red circle"></div></td>
                  <td><div aria-label="yes">${trues}</div></td>
                  <td><div aria-label="yes">${trues}</div></td>
                </tr>
                <tr>
                  <td scope="row"><div aria-label="gray" class="default circle"></div></td>
                  <td>
                    No Data
                    <p class="note">(please contribute)</p>
                  </td>
                  <td>
                    No Data
                    <p class="note">(please contribute)</p>
                  </td>
                </tr>
              </table>
            `}
          />

          <${Expandable}
            toggle=${'Sources'}
            detail=${html`
              <p>
                <b>Project Lockdown</b> combines multiple trusted sources to ensure that the data used is verified and accurate. You can find the full list of sources used here:
                <ul class="ld-sources">
                  <li>
                  <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://TIOF.Click/LockdownData" target="_blank"> Project Lockdown's Database</a></br>
                  (Collected from a number of NPI sources)
                  </li>
                  <li>
                   <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://covid19api.com/" target="_blank">Coronavirus COVID19 API</a></br>
                  (Data sourced from <a href="https://systems.jhu.edu/" target="_blank">Johns Hopkins CSSE)</a></br>
                  </li>
                </ul>
                If you find any errors, please help us and report it <a rel="noopener noreferrer" target="_blank" href="https://github.com/Code-for-All/lockdown/issues">by creating an issue here</a>.
              </p>
            `}
          />

          <${Expandable}
            toggle=${'Credits'}
            detail=${html`
              <p>
                <b>Project Lockdown</b> is a Civic Tech initiative made possible by a number of dedicated individuals and organizations.
                View the list of contributors <a href="https://docs.google.com/spreadsheets/d/1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0/edit?ts=5e74ac83#gid=634415797" target="_blank">here</a>.
              </p>
            `}
          />

          <${Expandable}
            toggle=${'Data & Privacy'}
            detail=${html`
              <p>
                We do not collect any personal information from our visitors.
              </p>
              <p>
                All information on project members is provided with their consent.
              </p>
            `}
          />
        `,
      };
    case 'settings':
      return {
        title: 'settings',
        template: html` <${Settings} /> `,
      };
    case 'contribute':
      return {
        title: 'contribute',
        template: html`
        <p>
          Do you have any NPI source you would want to share with us? Please follow this link:
        </p>
        <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfDWe2qlzUnd3e-YYspMzT9adUswDEYIdJMb7jz7ule34-yiA/viewform">
          Submit data
        </a>
        <p>
          Additionally, you can become part of the project by joining one of the following teams: 
          <ul>
            <li>Editors</li>
            <li>Devs</li>
            <li>UI/UX</li>
          </ul>
        </p>
        <p>
          Contact us via Telegram at:
          <br/>
          <a class="ld-link" target="_blank" rel="noopener noreferrer" href="https://t.me/ProjectLockdown"> @ProjectLockdown</a>
        </p>
        `,
      };

    case 'updates':
      return {
        title: 'updates',
        template: html` <${Ticker} /> `,
      };

    default:
      return {
        title: '',
        template: html``,
      };
  }
};

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'info',
    };

    this.switchContent = this.switchContent.bind(this);
  }

  componentDidMount() {
    let i = 0;

    installMediaQueryWatcher(`(min-width: 960px)`, (matches) => {
      this.setState({
        isMobile: !matches,
      });
      if (matches && i > 0) {
        // This is super ugly, but this fires on pageload and causes the focus to be set on the menu :/
        i++;
        this.props.close();
      }
    });
  }

  switchContent(val) {
    if (val === 'settings' && this.state.updateAvailable) {
      this.setState({
        updateAvailable: false,
      });
    }

    if (this.state.isMobile && this.props.opened && val === this.prevVal) {
      this.props.close();
      this.setState({
        activeItem: this.prevVal,
      });
      this.prevVal = '';
      return;
    }

    this.props.changeRoute(renderMenu(val));
    this.prevVal = val;
    this.setState({
      activeItem: val,
    });
  }

  render(_, { activeItem, updateAvailable }) {
    return html`
      <main id="main" class="ld-menu">
        <div class="ld-menu-nav">
          <nav>
            <${Tabs} switchContent=${this.switchContent}>
              <button id="info">info</button>
              <button id="settings">settings</button>
              <button id="updates">updates</button>
              <button id="contribute">contribute</button>
            <//>
          </nav>
        </div>

        <div class="ld-menu--content">
          <div class="mb-only">
            <div class="ld-menu--header">
              <h1>${activeItem}</h1>
            </div>
          </div>
          ${renderMenu(activeItem).template}
        </div>
      </main>
    `;
  }
}

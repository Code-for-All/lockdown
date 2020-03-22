import { html } from 'htm/preact';
import { Component } from 'preact';
import { router } from '../router.js';
import { crossIcon } from '../icons/cross.js';
import { IconButton } from './IconButton.js';

const KEYCODE_ESC = 27;

const restrictions = [
  { label: 'Workers' },
  { label: 'Commercial' },
  { label: 'Foreigners (in)' },
  { label: 'Foreigners (out)' },
  { label: 'Nationals (in)' },
  { label: 'Nationals (out)' },
  { label: 'In-between cities' }
];

export class CountryInfo extends Component {
  constructor() {
    super();

    this.__close = this.__close.bind(this);
    this.__onClick = this.__onClick.bind(this);
    this.__onKeyDown = this.__onKeyDown.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.__onKeyDown, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.__onKeyDown, true);
  }

  render() {
    return html`
      <div class="ld-country-info" onClick=${this.__onClick}>
        <div class="ld-country-info--dialog" ref=${ref => (this.dialogRef = ref)}>
          <h1>${this.props.country}</h1>

          <div class="ld-country-info--close-button" onClick=${this.__close}>
            <${IconButton}>${crossIcon}<//>
          </div>

          <div class="ld-country-info--stats">
            <div>
              <div class="ld-country-info--stats-key">Population</div>
              <div class="ld-country-info--stats-value">Unknown</div>
            </div>

            <div>
              <div class="ld-country-info--stats-key">Date</div>
              <div class="ld-country-info--stats-value">Unknown</div>
            </div>
          </div>

          <div class="ld-country-info--restrictions">
            <div></div>
            <div>TODO</div>
            <div>TODO</div>
            <div>TODO</div>
            ${restrictions.map(
              r => html`
                <div>${r.label}</div>
                <div><div class="ld-country-info--circle"></div></div>
                <div><div class="ld-country-info--circle"></div></div>
                <div><div class="ld-country-info--circle"></div></div>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }

  __onClick(e) {
    const clickedOutside = !e.path.includes(this.dialogRef);
    if (clickedOutside) {
      this.__close();
    }
  }

  __onKeyDown(e) {
    if (e.keyCode === KEYCODE_ESC) {
      this.__close();
    }
  }

  __close() {
    this.props.close();
  }
}

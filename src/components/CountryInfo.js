import { html } from 'htm/preact';
import { Component } from 'preact';
import { router } from '../router.js';

const KEYCODE_ESC = 27;

export class CountryInfo extends Component {
  constructor() {
    super();

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

          <div class="ld-country-info--data-entry">Population: <span class="ld-country-info--data-value">Unknown</span></div>
          <div class="ld-country-info--data-entry">Reported cases: <span class="ld-country-info--data-value">Unknown</span></div>
          <div class="ld-country-info--data-entry">Reported deaths: <span class="ld-country-info--data-value">Unknown</span></div>
          <div class="ld-country-info--data-entry">Lockdown start: <span class="ld-country-info--data-value">Unknown</span></div>
          <div class="ld-country-info--data-entry">Lockdown end: <span class="ld-country-info--data-value">Unknown</span></div>
        </div>
      </div>
    `;
  }

  __onClick(e) {
    const clickedOutside = !e.path.includes(this.dialogRef);
    if (clickedOutside) {
      this.props.close();
    }
  }

  __onKeyDown(e) {
    if (e.keyCode === KEYCODE_ESC) {
      this.props.close();
    }
  }
}

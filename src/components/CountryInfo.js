import { html } from 'htm/preact';
import css from 'csz';
import { Component } from 'preact';

const KEYCODE_ESC = 27;

const styles = css`
  & {
    position: fixed;
    z-index: 1100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    margin-left: 400px;
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
      <div class=${styles} onClick=${this.__onClick}>
        <div class="dialog" ref=${ref => (this.dialogRef = ref)}>
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

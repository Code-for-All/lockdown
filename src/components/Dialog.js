import { html } from 'htm/preact';
import { Component } from 'preact';
import css from 'csz';
import { close } from '../assets/icons/icons.js';

const KEYCODE_ESC = 27;

const styles = css`
  & {
    position: fixed;
    margin-left: 400px;
    margin-top: 60px;
    width: 100%;
    height: 100%;
    z-index: 1100;
  }

  .ld-dialog--container {
    overflow: hidden;
    position: fixed;
    width: 90%;
    padding-top: 20px;
    max-width: 400px;
    left: calc(50% + 200px);
    top: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
  }

  .ld-dialog--header {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .ld-dialog--header h1 {
    margin-top: 0;
    margin-left: 24px;
    margin-bottom: 0;
    flex: 1;
  }

  .ld-dialog--content {
    overflow: auto;
    height: calc(100% - 60px);
    padding: 0 20px 20px 20px;
  }

  .ld-dialog--close-cont button {
    display: flex;
    padding: 0;
    width: 30px;
    border: none;
    overflow: visible;
    background: transparent;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: var(--ld-text);
  }

  .ld-dialog--close-cont button:hover {
    background-color: var(--ld-hover);
    border-radius: 50%;
  }

  @media (max-width: 960px) {
    & {
      margin-bottom: 60px;
      margin-top: 60px;
      position: fixed;
      width: 100%;
      height: calc(100% - 120px);
      z-index: 1100;
      margin-left: 0;
    }

    .ld-dialog--container {
      width: 90%;
      max-width: 400px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: calc(100% - 140px);
    }
  }
`;

export default class Dialog extends Component {
  constructor() {
    super();
    this.__onClick = this.__onClick.bind(this);
    this.__closeDialog = this.__closeDialog.bind(this);
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
      <div class="${styles}" onClick=${this.__onClick}>
        <div ref=${ref => (this.dialogRef = ref)} class="ld-dialog--container">
          <div class="ld-dialog--header">
            <h1>${this.props.title}</h1>
            <div class="ld-dialog--close-cont">
              <button onClick=${this.__closeDialog} class="ld-dialog--close">
                ${close}
              </button>
            </div>
          </div>
          <div class="ld-dialog--content">
            ${this.props.template}
          </div>
        </div>
      </div>
    `;
  }

  __onClick(e) {
    const clickedOutside = !e.composedPath().includes(this.dialogRef);
    if (clickedOutside) {
      this.__closeDialog();
    }
  }

  __closeDialog() {
    this.props.onClose();
  }

  __onKeyDown(e) {
    if (e.keyCode === KEYCODE_ESC) {
      this.__closeDialog();
    }
  }
}

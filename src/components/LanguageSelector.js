import { Component } from 'preact';
import { html } from 'htm/preact';
import css from 'csz';

import { chevronDown, chevronUp } from '../assets/icons/icons.js';

const selectedLang = css`
  & {
    position: absolute;
    top: 25vh;
    right: 5vw;
    height: 30px;
    min-width: 30px;
    padding: 0px;
    padding-left: 10px;
    border-radius: 12.5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    color: #333333;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.05em;
    .dark & {
      background-color: #333333;
      color: #fff;
    }
    & .circleBtn {
      margin-left: 5px;
      height: 30px;
      min-width: 30px;
      border-radius: 50%;
      color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      .dark & {
        background-color: #333333;
        color: #fff;
      }
    }
  }
`;

const langOptions = css`
  & {
    background: transparent;
    display: flex;
    align-items: center;
    position: absolute;
    top: calc(25vh + 37px);
    right: 5vw;
    max-width: 0px;
    overflow: hidden;
    transition: 0.5s;
    padding: 5px 0px;
    &.show {
      max-width: 50vw;
      overflow-x: scroll;
    }
    & .langOpt {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: #fff;
      color: #333333;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      overflow: hidden;
      margin-left: 10px;
      .dark & {
        background-color: #333333;
        color: #fff;
      }
    }
  }
`;

class LanguageSelector extends Component {
  constructor() {
    super();
    this.state = {
      showLangOpt: false,
    };
    this.toggleLangOpts = this.toggleLangOpts.bind(this);
    this.changeCurrentLanguage = this.changeCurrentLanguage.bind(this);
  }
  componentDidUpdate() {
    console.log(this.props);
  }
  toggleLangOpts() {
    this.setState({
      showLangOpt: !this.state.showLangOpt,
    });
  }
  changeCurrentLanguage(lang) {
    this.toggleLangOpts();
    this.props.onLocateChange(lang);
  }
  render({ i18n, languages }, { showLangOpt }) {
    return html`
      <div class="${selectedLang}" onClick=${this.toggleLangOpts}>
        ${i18n.locale?.toUpperCase()}
        <div class="circleBtn">
          ${showLangOpt ? chevronUp : chevronDown}
        </div>
      </div>
      <div class=${`${langOptions} ${showLangOpt ? 'show' : ''}`}>
        ${languages.map((language) => {
          return html`<div class="langOpt" onClick=${() => this.changeCurrentLanguage(language)}>
            ${language?.toUpperCase().replace('-', '\n')}
          </div>`;
        })}
      </div>
    `;
  }
}

export default LanguageSelector;

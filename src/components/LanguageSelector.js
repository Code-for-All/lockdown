import { Component } from 'preact';
import { html } from 'htm/preact';
import css from 'csz';

import { world } from '../assets/icons/icons.js';

const selectedLang = css`
  & {
    position: absolute;
    top: 25vh;
    right: 2.5vw;
    height: 30px;
    min-width: 30px;
    padding: 0px;
    padding-left: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    color: #333333;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.05em;
    &:hover {
      cursor: pointer;
    }
    .dark & {
      background-color: #333333;
      color: #fff;
    }
    & .circleBtn {
      margin-left: 5px;
      height: 30px;
      min-width: 30px;
      border-radius: 50%;
      color: #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.05em;
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
    flex-wrap: no-wrap;
    &.show {
      max-width: 50vw;
      flex-wrap: wrap;
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
      font-weight: 500;
      margin-bottom: 10px;
      &:hover {
        cursor: pointer;
        border: 0px solid rgba(51, 51, 51, 0.5);
        background-color: #e0e0e0;
      }
      &.active {
        border: 0px solid #333333;
        background-color: #e0e0e0;
      }
      .dark &.active {
        border: 0px solid #fff;
        background-color: #828282;
      }
      .dark & {
        background-color: #333333;
        color: #fff;
      }
      .dark &:hover {
        background-color: #828282;
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
          ${world}
        </div>
      </div>
      <div class=${`${langOptions} ${showLangOpt ? 'show' : ''}`}>
        ${languages.map((language) => {
          return html`<div
            class="langOpt ${language === i18n.locale ? 'active' : ''}"
            onClick=${() => this.changeCurrentLanguage(language)}
          >
            ${language?.toUpperCase().replace('-', '\n')}
          </div>`;
        })}
      </div>
    `;
  }
}

export default LanguageSelector;

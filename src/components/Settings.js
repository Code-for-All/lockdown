import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/compat';
import { addPwaUpdateListener } from '../utils/addPwaUpdateListener.js';
import { setFavIcon } from '../utils/setFavIcon.js';
import css from 'csz';
import './pwa-install-button';
import './pwa-update-available';

const styles = css`
  & {
    padding-top: 20px;
  }

  label {
    user-select: none;
  }

  input {
    margin-right: 10px;
  }

  .ld-button {
    font-weight: 700;
    display: block;
    margin: 0 auto;
    border: none;
    padding: 15px;
    overflow: visible;
    background: transparent;
    background-color: #e0e0e0;
    color: var(--ld-button-text);
    font-size: 16px;
    border-radius: 25px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
    .dark & {
      background-color: #4f4f4f;
    }
  }

  .ld-button:hover,
  .ld-button:active {
    background-color: rgb(204, 204, 204);
    cursor: pointer;
    .dark & {
      background-color: rgb(63, 63, 63);
    }
  }
  & .select-css {
    display: block;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--ld-button-text);
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 70%;
    max-width: 70%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0px 15%;
    border: 1px solid #aaa;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #e0e0e0;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #e0e0e0 0%, #e0e0e0 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right 0.7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: 0.65em auto, 100%;
    .dark & {
      background-color: #4f4f4f;
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
        linear-gradient(to bottom, #4f4f4f 0%, #4f4f4f 100%);
    }
  }
  /* Hide arrow icon in IE browsers */
  & .select-css::-ms-expand {
    display: none;
  }
  /* Hover style */
  & .select-css:hover {
    border-color: #888;
  }
  /* Focus style */
  & .select-css:focus {
    border-color: #aaa;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: var(--ld-button-text);
    outline: none;
  }

  /* Set options to normal weight */
  & .select-css option {
    font-weight: normal;
  }

  /* Support for rtl text, explicit support for Arabic and Hebrew */
  *[dir='rtl'] .select-css,
  :root:lang(ar) .select-css,
  :root:lang(iw) .select-css {
    background-position: left 0.7em top 50%, 0 0;
    padding: 0.6em 0.8em 0.5em 1.4em;
  }

  /* Disabled styles */
  .select-css:disabled,
  .select-css[aria-disabled='true'] {
    color: graytext;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  }

  .select-css:disabled:hover,
  .select-css[aria-disabled='true'] {
    border-color: #aaa;
  }
`;

export function Settings({ onClose, locale }) {
  const [pwaUpdateAvailable, setPwaUpdateAvailable] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkmode() {
    if (document.getElementsByTagName('html')[0].classList.contains('dark')) {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      localStorage.setItem('darkmode', 'false');
      setFavIcon(false);
      setDarkMode(false);
      onClose();
    } else {
      document.getElementsByTagName('html')[0].classList.add('dark');
      localStorage.setItem('darkmode', 'true');
      setFavIcon(true);
      setDarkMode(true);
      onClose();
    }
  }

  useEffect(async () => {
    addPwaUpdateListener((updateAvailable) => {
      setPwaUpdateAvailable(updateAvailable);
    });
    let dark = localStorage.getItem('darkmode');
    dark = dark !== 'false' && dark !== null;
    setDarkMode(dark);
  }, []);

  return html`
    <div class=${styles}>
      <button onClick=${toggleDarkmode} class="ld-button">
        ${locale.t('menu.userPreferenceSection.theme.action')}
        ${darkMode ? locale.t('menu.userPreferenceSection.theme.light') : locale.t('menu.userPreferenceSection.theme.dark')}
      </button>

      <!-- <pwa-install-button>
        <button onClick=${() => onClose()} class="ld-button">${locale.t('menu.userPreferenceSection.app.install')}</button>
      </pwa-install-button> -->

      ${pwaUpdateAvailable
        ? html`
            <pwa-update-available>
              <button onClick=${() => onClose()} class="ld-button">${locale.t('menu.userPreferenceSection.app.update')}</button>
            </pwa-update-available>
          `
        : ''}
    </div>
  `;
}

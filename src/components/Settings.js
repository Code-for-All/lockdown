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
`;

export function Settings() {
  const [showGeolocationButton, setshowGeolocationButton] = useState(false);
  const [pwaUpdateAvailable, setPwaUpdateAvailable] = useState(false);

  function toggleDarkmode() {
    if (document.getElementsByTagName('html')[0].classList.contains('dark')) {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      localStorage.setItem('darkmode', 'false');
      setFavIcon(false);
    } else {
      document.getElementsByTagName('html')[0].classList.add('dark');
      localStorage.setItem('darkmode', 'true');
      setFavIcon(true);
    }
  }

  function toggleGeolocation() {
    if (navigator.permissions) {
      navigator.geolocation.getCurrentPosition(() => {
        // triggers the browsers permission popup, and then the zoom gets handled in Worldmap.js
        setshowGeolocationButton(false);
      });
    }
  }

  useEffect(async () => {
    addPwaUpdateListener((updateAvailable) => {
      setPwaUpdateAvailable(updateAvailable);
    });

    if (navigator.permissions) {
      const geolocation = await navigator.permissions.query({ name: 'geolocation' });

      if (localStorage.getItem('geolocation') === 'true') {
        setshowGeolocationButton(false);
        return;
      }

      if (geolocation.state !== 'granted') {
        setshowGeolocationButton(true);
      }
    }
  }, []);

  return html`
    <div class=${styles}>
      <button onClick=${toggleDarkmode} class="ld-button">Toggle darkmode</button>
      ${showGeolocationButton ? html` <button onClick=${toggleGeolocation} class="ld-button">Allow geolocation</button> ` : ''}

      <pwa-install-button>
        <button class="ld-button">Install app</button>
      </pwa-install-button>

      ${pwaUpdateAvailable
        ? html`
            <pwa-update-available>
              <button class="ld-button">Update app</button>
            </pwa-update-available>
          `
        : ''}
    </div>
  `;
}

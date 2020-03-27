import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/compat';
import { addPwaUpdateListener } from '../utils/addPwaUpdateListener.js';
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
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    border: none;
    padding: 15px;
    overflow: visible;
    background: transparent;
    background-color: #769de2;
    color: var(--ld-text);
    font-size: 16px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  }

  .ld-button:hover,
  .ld-button:active {
    background-color: #89aff3;
  }
`;

export function Settings() {
  const [showGeolocationButton, setshowGeolocationButton] = useState(false);
  const [pwaUpdateAvailable, setPwaUpdateAvailable] = useState(false);

  /* TODO: Does this need to be in useEffect? Or is it fine here? */
  addPwaUpdateListener(updateAvailable => {
    setPwaUpdateAvailable(updateAvailable);
  });

  function toggleDarkmode() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('darkmode', 'false');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('darkmode', 'true');
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
      ${showGeolocationButton
        ? html`
            <button onClick=${toggleGeolocation} class="ld-button">Allow geolocation</button>
          `
        : ''}

      <pwa-install-button>
        <button class="ld-button">Install pwa</button>
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

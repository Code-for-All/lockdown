import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/compat';
import { updatesService } from '../services/updatesService.js';
import { offline, loading } from '../assets/icons/icons.js';
import { loadingStyles, offlineStyles } from './CountryInfo.js';
import css from 'csz';

const UPDATE_TYPES = {
  new_entry: 'new entry',
  announcement: 'announcement',
  rectification: 'rectification',
  promoting_project: 'project promotion',
  promoting_petition: 'petition',
};

export function Ticker() {
  const [updates, setUpdates] = useState(undefined);

  useEffect(async () => {
    const response = await updatesService.getUpdates();
    setUpdates(response);
  }, []);

  /* Offline & no cached data state */
  if (!navigator.onLine) {
    if (updates?.status !== 'success') {
      return html`
        <div class="${offlineStyles}">
          ${offline}
          <b>You are not connected to the internet</b>
          <p>Information for this country can't be displayed because you are currently offline. Please check your internet connection.</p>
        </div>
      `;
    }
  }

  /* Loading state */
  if (!updates && navigator.onLine) {
    return html`
      <div class="${loadingStyles}">
        ${loading}
      </div>
    `;
  }

  /* Error state */
  if (updates.status === 'failed' && navigator.onLine) {
    return html`<div style="margin-top: 14px;">An error occured while fetching updates.</div>`;
  }

  return html`
    <div class="${styles}">
      <ul>
        ${updates?.data?.updates?.map(
          (update) => html`
            <li>
              <div class="ld-ticker--bar">
                <div class="ld-ticker--dot-container">
                  <div aria-label=${UPDATE_TYPES[update.type.toLowerCase()]} class="ld-ticker--dot ${update.type.toLowerCase()}"></div>
                </div>
                <div class="ld-ticker--line"></div>
              </div>
              <div class="ld-ticker--content">
                <div class="ld-ticker--title">
                  ${update.title}
                </div>
                <div class="ld-ticker--content">
                  ${update.content}
                </div>
                ${update.link
                  ? html`<div class="ld-ticker--link">
                      <a href="${update.link}">Source</a>
                    </div>`
                  : ''}
                <div class="ld-ticker--date">
                  ${update.date}
                </div>
              </div>
            </li>
          `
        )}
      </ul>
    </div>
  `;
}

const styles = css`
  & ul {
    list-style: none;
    margin: 0;
    padding: 20px 0 0 0;
    font-family: 'Montserrat', sans-serif;
  }

  & li {
    display: flex;
    margin-bottom: 20px;
  }

  .new_entry {
    background-color: #769de2;
  }
  .promoting_project {
    background-color: #ebb577;
  }
  .rectification {
    background-color: #d36d6b;
  }
  .promoting_petition {
    background-color: #ba87f0;
  }
  .announcement {
    background-color: #9fc184;
  }

  .ld-ticker {
    width: 100%;
  }

  .ld-ticker--bar {
    width: 15px;
    display: flex;
    margin-right: 20px;
    flex-direction: column;
  }

  .ld-ticker--dot-container {
    display: flex;
    justify-content: center;
    width: 15px;
    height: 20px;
  }

  .ld-ticker--dot {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }

  .ld-ticker--line {
    width: 15px;
    height: 100%;
    position: relative;
  }

  .ld-ticker--line::after {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 50%;
    border-left: 1px solid lightgrey;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }

  .ld-ticker--title {
    font-weight: 700;
    margin-bottom: 10px;
  }
  .ld-ticker--content {
    margin-bottom: 10px;
  }
  .ld-ticker--link {
    margin-bottom: 10px;
  }
  .ld-ticker--link a {
    color: var(--ld-active);
  }
  .ld-ticker--date {
    font-size: 12px;
    letter-spacing: 1px;
  }
  .ld-ticker--text {
    font-size: 14px;
  }
`;

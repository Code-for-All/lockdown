import { html } from 'htm/preact';

export function Settings() {
  function toggleDarkmode() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('darkmode', 'false');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('darkmode', 'true');
    }
  }

  return html`
    <button onClick=${toggleDarkmode}>toggle darkmode</button>
  `;
}

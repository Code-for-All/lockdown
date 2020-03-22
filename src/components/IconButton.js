import { html } from 'htm/preact';

export const IconButton = ({ children }) => html`
  <button class="button-unstyled ld-icon-button">${children}</button>
`;

import { html } from 'htm/preact';
import css from 'csz';
import { Totals } from './Totals.js';
import { logo } from '../assets/icons/icons.js';

const styles = css`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    /* needs to be higher than the map */
    z-index: 1100;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
  }

  a {
    width: 400px;
    display: block;
    flex-shrink: 0;
  }

  .totals {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 899px) {
    .totals {
      display: none;
    }
  }
`;

export const Header = () => html`
  <header class=${styles}>
    <a href="/">
      ${logo}
      <!-- TODO: screen reader h1 -->
    </a>

    <div class="totals">
      <${Totals} />
    </div>
  </header>
`;

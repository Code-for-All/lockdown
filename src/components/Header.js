import { html } from 'htm/preact';
import css from 'csz';
import { Totals } from './Totals.js';

const logo = new URL('../assets/images/logo.png', import.meta.url).href;

const styles = css`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
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
    display: block;
    flex-shrink: 0;
  }

  .totals {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (min-width: 900px) {
    img {
      margin-left: 48px;
    }
  }

  @media (max-width: 899px) {
    .totals {
      display: none;
    }
  }
`;

export const Header = () => html`
  <header class=${styles}>
    <a href="/lockdown/">
      <img src="${logo}" width="180" />
      <!-- TODO: screen reader h1 -->
    </a>

    <div class="totals">
      <${Totals} />
    </div>
  </header>
`;

import { html } from 'htm/preact';
import css from 'csz';
import { Totals } from './Totals.js';
import { logo } from '../assets/icons/icons.js';

const styles = css`
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--ld-bg);
    color: var(--ld-text);
    /* needs to be higher than the map */
    z-index: 1200;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /*height: 60px;*/
    height: 55px;
    width: 100%;
    animation: 1s fadeInDown forwards;
    @media (max-width: 899px) {
      &.hide{
        animation: 1s fadeOutUp forwards;
      }
    }
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
    position: relative;
    display: block;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 65%;
  }

  a p {
    position: absolute;
    color: var(--ld-active);
    top: -4px;
    right: -45px;
    margin: 0;
    font-size: 12px;
  }

  .totals {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .ld-logo-wrapper {
    display: flex;
    width: 320px;
    & a svg{
      width: 100%
      height: 100%
    }
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

export const Header = (_) => html`
  <a class="skiplink" href="#main">Go to main content</a>
  <header class="${styles} ${_.show ? '' : 'hide'}">
    <div class="ld-logo-wrapper">
      <a href="" aria-current="page">
        <!-- <p>BETA</p> -->
        ${logo}
        <!-- TODO: screen reader h1 -->
      </a>
    </div>
    <div class="totals">
      <${Totals} selectedDate=${_.selectedDate} startDate=${_.startDate} endDate=${_.endDate} i18n=${_.i18n} />
    </div>
  </header>
`;

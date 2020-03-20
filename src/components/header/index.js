import { h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/images/lockdown.png';
import style from './style';

const Header = () => (
  <header class={'navbar is-transparent is-fixed-top' + style.header}>
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src={logo}
          alt="Lockdown, information about current lockdown state of different countries"
          width="112"
          height="28"
        />
      </a>
      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="./docs.html">
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="./overview.html">
              Overview
            </a>
            <a class="navbar-item" href="./sources.html">
              Sources
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" href="./about.html">
              About
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="bd-tw-button button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="https://code-for-all.github.io/lockdown"
                target="_blank"
                href="https://twitter.com/intent/tweet?text=Look at the lockdown state of countries across the world&amp;url=https://code-for-all.github.io/lockdown&amp;via=codeforall"
              >
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </p>
            <p class="control">
              <a
                class="button is-primary"
                href="https://github.com/Code-for-All/lockdown/raw/master/data/datafile.json"
              >
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

import { h, Component } from 'preact';
import style from './style';

export default class Totals extends Component {
  render() {
    return (
      <div class={style.totals}>
        <div class="card info-panel">
          <div class="card-content">
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">
                    Countries
                    <br /> in lockdown
                  </p>
                  <p id="active-lockdowns" class="title">
                    0
                  </p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">
                    People
                    <br />
                    affected
                  </p>
                  <p class="title">3M</p>
                </div>
              </div>
            </nav>
            <p class="title">“Proof of concept, no real data yet”</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                View on <a href="https://twitter.com/CodeforAll/status/1239480299467214849">Twitter</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                Follow us on <a href="https://www.facebook.com/letscodeforall/">Facebook</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

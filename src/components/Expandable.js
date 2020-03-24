import { html } from 'htm/preact';
import { useState, useRef, useEffect } from 'preact/compat';
import css from 'csz';

const chevronRight = new URL('../assets/icons/chevron-right.svg', import.meta.url).href;
const chevronDown = new URL('../assets/icons/chevron-down.svg', import.meta.url).href;

export function Expandable(props) {
  const [expanded, setExpanded] = useState(false);
  const detail = useRef(null);

  useEffect(() => {
    if (expanded) {
      detail.current.focus();
    }
  }, [expanded]);

  const randomId = ('' + Math.random()).substring(2, 9);

  return html`
    <div class="${styles}">
      <div class="ld-expandable">
        <button
          onClick=${() => setExpanded(!expanded)}
          id="button1"
          class="ld-expandable--toggle"
          aria-controls="expandable-id--${randomId}"
          aria-expanded="${expanded}"
        >
          <div class="ld-expandable--icon">
            <img src=${expanded ? chevronDown : chevronRight} alt="" />
          </div>
          <div class="ld-expandable--toggle-content">
            <h2>${props.toggle}</h2>
          </div>
        </button>

        <div
          ref=${detail}
          id="expandable-id--${randomId}"
          class="ld-expandable--detail ${expanded ? 'ld-expandable--expanded' : 'ld-expandable--closed'}"
          role="region"
          tabindex="-1"
        >
          ${props.detail}
        </div>
      </div>
    </div>
  `;
}

const styles = css`
  .ld-expandable {
    width: 100%;
    height: auto;
    border-bottom: lightgrey solid 1px;
  }

  .ld-expandable--icon {
    height: 100%;
    display: flex;
  }

  .ld-expandable--toggle-content {
    flex: 1;
  }

  .ld-expandable button {
    text-align: left;
    width: 100%;
    display: flex;

    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
  }

  .ld-expandable--toggle {
    height: 60px;
  }

  .ld-expandable--detail {
  }

  .ld-expandable--expanded {
    display: block;
    padding: 10px;
  }

  .ld-expandable--closed {
    display: none;
  }
`;

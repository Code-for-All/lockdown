import { html } from 'htm/preact';
import { useState, useRef, useEffect } from 'preact/compat';

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

  return html`
    <div class="ld-expandable">
      <button
        onClick=${() => setExpanded(!expanded)}
        id="button1"
        class="ld-expandable--toggle"
        aria-controls="t1"
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
        id="t1"
        class="ld-expandable--detail ${expanded ? 'ld-expandable--expanded' : 'ld-expandable--closed'}"
        role="region"
        tabindex="-1"
      >
        ${props.detail}
      </div>
    </div>
  `;
}

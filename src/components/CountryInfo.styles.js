import css from 'csz';

export const countryInfoStyles = css`
  & {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 0 16px 16px 16px;
    border-radius: 8px;
    width: 100%;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

  h2 {
    margin-top: 16px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--ld-gray-5);
  }

  .data {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .data-entry {
    font-variant-numeric: tabular-nums;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ld-gray-5);
  }

  .data dd {
    margin-left: 0;
    text-align: left;
  }

  .legend dl {
    display: flex;
    justify-content: space-between;
  }

  .legend-item {
    display: flex;
    align-items: center;
  }

  .legend-item dt {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .legend-item dd {
    margin-inline-start: 0;
  }

  .legend-green {
    background-color: var(--ld-green-1);
  }

  .legend-yellow {
    background-color: var(--ld-yellow-1);
  }

  .legend-red {
    background-color: var(--ld-red-1);
  }

  .legend-gray {
    background-color: var(--ld-gray-3);
  }

  .measures {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    list-style: none;
    padding: 0;
  }

  .measures > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 8px;
    text-align: center;
  }

  .measure svg {
    width: 24px;
    height: 24px;
  }

  .measure-label {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .measures > div:hover .measure-label {
    opacity: 1;
  }

  .measure-YES {
    fill: var(--ld-green-1);
  }

  .measure-PARTIAL {
    fill: var(--ld-yellow-1);
  }

  .measure-NO {
    fill: var(--ld-red-1);
  }

  .measure-UNCLEAR {
    fill: var(--ld-gray-3);
  }

  .ld-travel {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-travel dt {
    flex-basis: 50%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
  }

  .ld-travel dd {
    margin-left: 0;
  }

  .ld-travel--val-icon {
    fill: var(--ld-gray-3);
  }

  .ld-travel--val-YES {
    background-color: var(--ld-green-1);
  }

  .ld-travel--val-PARTIALLY {
    background-color: var(--ld-yellow-1);
  }

  .ld-travel--val-NO {
    background-color: var(--ld-red-1);
  }

  .ld-travel--val-UNCLEAR {
    background-color: var(--ld-gray-3);
  }

  .ld-travel--val-NA {
    /* TODO: What to color NA? */
    background-color: var(--ld-gray-3);
  }

  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  .ld-travel--values {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  /* .ld-travel--symbol::after {
    position: absolute;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    content: attr(data-tooltip);
  }

  .ld-travel--symbol:hover::after {
    opacity: 1;
  } */
`;

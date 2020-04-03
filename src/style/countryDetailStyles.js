import css from 'csz';

export const countryDetailStyles = css`
  & {
    align-items: center;
  }

  .dialog {
    background-color: var(--ld-bg);
    color: var(--ld-text);
    padding: 16px;
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
    margin-top: 0px;
  }

  .data-entry {
    display: flex;
  }

  p {
    margin: 0;
  }

  p:first-of-type {
    flex: 1;
  }

  p:last-of-type {
    font-weight: 700;
    color: var(--ld-text);
  }

  ul {
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    list-style: none;
  }

  .ld-travel {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-travel p {
    flex-basis: 30%;
    flex-shrink: 0;
    font-weight: 300;
  }

  .ld-travel--val-icon {
    fill: var(--ld-text);
  }

  .ld-travel--val-YES {
    background-color: #9fc184;
  }
  .ld-travel--val-PARTIALLY {
    background-color: #769de2;
  }
  .ld-travel--val-NO {
    background-color: #d36d6b;
  }
  .ld-travel--val-UNCLEAR {
    background-color: #ebb577;
  }
  .ld-travel--val-NA {
    background-color: #828282;
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
    justify-content: space-between;
  }

  .ld-travel--symbol {
    position: relative;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .data-value {
    color: grey;
  }

  .travel-advice {
    padding: 16px;
  }

  .ld-contribute {
    text-align: center;
  }

  .ld-measures {
    display: flex;
    margin-bottom: 10px;
  }

  .ld-measures-YES {
    background-color: #9fc184;
  }
  .ld-measures-PARTIAL {
    background-color: #769de2;
  }
  .ld-measures-NO {
    background-color: #d36d6b;
  }
  .ld-measures-UNCLEAR {
    background-color: #828282;
  }

  .ld-measures-key {
    flex: 1;
  }

  .ld-measures-icon svg {
    margin-right: 20px;
    width: 20px;
    height: 20px;
    fill: var(--ld-text);
  }

  .ld-measures-value {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`;

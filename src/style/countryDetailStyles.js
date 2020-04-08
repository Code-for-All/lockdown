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

  dd {
    margin-left: 0;
  }

  .data-entry {
    display: flex;
    margin-bottom: 5px;
  }

  .data-entry dl {
    margin: 0 20px 5px 0;
    flex: 1;
  }

  .data-entry dt {
    margin-right: 20px;
    flex: 1;
  }

  .data-entry:last-of-type {
    margin: 0;
  }

  .data-entry dd {
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

  .ld-travel dt {
    flex-basis: 60%;
    flex-shrink: 0;
    font-weight: 300;
    margin-right: 20px;
  }

  .ld-travel dd {
    margin-left: 0;
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
    word-break: break-all;
    text-align: right;
  }

  .travel-advice {
    padding: 16px;
  }

  .ld-contribute {
    text-align: center;
  }

  .ld-measures-wrapper {
    display: flex;
  }
  .ld-measures-wrapper dd {
    margin-left: auto;
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
    margin-right: 20px;
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
    flex-shrink: 0;
  }

  @media (max-width: 960px) {
    .dialog {
      margin-left: 0;
    }
  }
`;

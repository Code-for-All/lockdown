import { html } from 'htm/preact';
import { useState, useEffect } from 'preact/compat';
import css from 'csz';

export function Ticker() {
  const [data, setData] = useState([
    {
      type: 'New',
      date: '19-22-2020, 22:01',
      text:
        'Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something'
    },
    {
      type: 'Rectification',
      date: '19-22-2020, 19:51',
      text: 'Some information message here with a link to a source or something'
    },
    {
      type: 'Petition',
      date: '19-22-2020, 22:01',
      text:
        'Some information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or somethingSome information message here with a link to a source or something'
    },
    {
      type: 'Announcement',
      date: '19-22-2020, 19:51',
      text: 'Some information message here with a link to a source or something'
    },
    {
      type: 'Promotion',
      date: '19-22-2020, 19:51',
      text: 'Some information message here with a link to a source or something'
    }
  ]);

  useEffect(() => {
    // const result = await notificationsService();
    // setData(result.data);
  });

  return html`
    <div class="${styles}">
      <ul>
        ${data.map(
          ({ date, text, type }) => html`
            <li>
              <div class="ld-ticker--bar">
                <div class="ld-ticker--dot-container">
                  <div class="ld-ticker--dot ${type.toLowerCase()}"></div>
                </div>
                <div class="ld-ticker--line"></div>
              </div>
              <div class="ld-ticker--content">
                <div class="ld-ticker--date">
                  ${date}
                </div>
                <div class="ld-ticker--text">
                  ${text}
                </div>
              </div>
            </li>
          `
        )}
      </ul>
    </div>
  `;
}

const styles = css`
  & ul {
    list-style: none;
    margin: 0;
    padding: 20px 0 0 0;
    font-family: 'Montserrat', sans-serif;
  }

  & li {
    display: flex;
    margin-bottom: 20px;
  }

  .new {
    background-color: #769de2;
  }
  .promotion {
    background-color: #ebb577;
  }
  .rectification {
    background-color: #d36d6b;
  }
  .petition {
    background-color: #ba87f0;
  }
  .announcement {
    background-color: #9fc184;
  }

  .ld-ticker {
    width: 100%;
  }

  .ld-ticker--bar {
    width: 15px;
    display: flex;
    margin-right: 20px;
    flex-direction: column;
  }

  .ld-ticker--dot-container {
    display: flex;
    justify-content: center;
    width: 15px;
    height: 20px;
  }

  .ld-ticker--dot {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }

  .ld-ticker--line {
    width: 15px;
    height: 100%;
    position: relative;
  }

  .ld-ticker--line::after {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 50%;
    border-left: 1px solid lightgrey;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }

  .ld-ticker--content {
  }
  .ld-ticker--date {
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  .ld-ticker--text {
    font-size: 12px;
  }
`;

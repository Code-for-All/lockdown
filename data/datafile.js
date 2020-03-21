export default {
  Belize: {
    lockdowns: [
      {
        start: '2020-01-01',
        end: '2020-02-01'
      },
      {
        start: '2020-03-15',
        end: '2020-04-15'
      }
    ]
  },
  Belgium: {
    lockdowns: [
      {
        start: '2020-03-15',
        end: '2020-04-15'
      }
    ]
  },
  Germany: {
    lockdowns: [
      {
        start: '2020-03-15',
        end: '2020-04-15'
      }
    ]
  },
  France: {
    lockdowns: [
      {
        start: '2020-03-15',
        end: '2020-04-15'
      }
    ]
  },
  'United Kingdom': {
    lockdowns: []
  },
  Netherlands: {
    lockdowns: []
  },
  Russia: {
    lockdowns: []
  },
  Norway: {
    lockdowns: [
      {
        start: '2020-03-17',
        inbound: {
          whitelist: ['Norway', 'Denmark', 'Iceland', 'Sweden', 'Finland']
        },
        source: {
          url:
            'https://www.helsedirektoratet.no/nyheter/helsedirektoratet-har-vedtatt-omfattende-tiltak-for-a-hindre-spredning-av-covid-19',
          lang: 'no'
        }
      }
    ]
  }
};

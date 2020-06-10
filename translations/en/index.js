export default {
  translationBy: 'Project Lockdown team',
  languageId: 'en', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    version: 'BETA',
    totals: {
      territoriesLockdown: 'TERRITORIES IN LOCKDOWN',
      peopleAffected: 'PEOPLE AFFECTED',
      cases: 'REPORTED CASES',
      deaths: 'REPORTED DEATHS',
    },
  },
  menu: {
    informationSection: {
      banner: 'Project Lockdown is currently in beta. Not all data may be available yet.',
      main: {
        name: 'Project Lockdown ',
        text:
          'provides a mapping of the different NPIs (Non-Pharmaceutical Interventions) enforced across the globe in response to the COVID-19 crisis to visualize the success of different pandemic response measures, monitor effects on Human and Digital Rights, and clarify evaluation metrics.',
      },
      about: {
        title: 'About',
        text: {
          p1:
            'Lockdown, quarantine, and isolation measures have been implemented across the globe to reduce the spread of COVID-19 and reduce the strain on medical infrastructure.',
          p2:
            'empowers citizens, journalists, and Human Rights Defenderes to easily analyze the social and political effects of these measures. Founded on the values of transparency and accountability,',
          p3: 'is committed to providing citizens of the world with the tools they need to stay safe and informed.',
        },
      },
      sources: {
        title: 'Sources',
        subtitle:
          'combines multiple trusted sources to ensure that the data used is verified and accurate. You can find the full list of sources used here:',
        linksList: {
          first: {
            linkTitle: "Project Lockdown's Database",
            text: '(Collected from a number of NPI sources)',
          },
          second: {
            linkTitle: 'Coronavirus COVID19 API',
            text: '(Data sourced from',
            highlight: 'Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: 'If you find any errors, please help us and report it',
          highlight: 'by creating an issue here',
        },
      },
      credits: {
        title: 'Credits',
        text:
          'is a Civic Tech initiative made possible by a number of dedicated individuals and organizations. View the list of contributors',
        highlight: 'here',
      },
      dataPrivacity: {
        title: 'Data & Privacy',
        paragraphs: {
          p1: 'We do not collect any personal information from our visitors.',
          p2: 'All information on project members is provided with their consent.',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: 'Toggle',
        dark: 'Dark Mode',
        light: 'Light Mode',
      },
      geolocation: 'Allow geolocation',
      app: {
        install: 'Install app',
        update: 'Update app',
      },
    },
  },
  tdo: {
    tabs: {
      dailyLife: {
        name: 'Daily Life',
        subtitle: 'Daily life (restrictions)',
        noResults: 'N/A',
        stats: {
          population: 'Population',
          max_assembly: 'Max assembly',
          cases: 'Cases',
          recoveries: 'Recoveries',
          deaths: 'Deaths',
        },
        measureValues: {
          '1': 'TOTAL',
          '2': 'PARTIAL',
          '3': 'NONE',
          '4': 'UNCLEAR',
        },
        measures: {
          home: 'Stay Home',
          homeShortVersion: 'Stay Home',
          shopping: 'Go Shopping',
          shoppingShortVersion: 'Go Shopping',
          outdoors: 'Go Outdoors',
          outdoorsShortVersion: 'Go Outdoors',
          military: 'Military Presence',
          militaryShortVersion: 'Military Presence',
          religious: 'Religious Service',
          religiousShortVersion: 'Religious Service',
          electricity: 'Electricity',
          electricityShortVersion: 'Electricity',
          work: 'Go to Work',
          workShortVersion: 'Go to Work',
          water: 'Water',
          waterShortVersion: 'Water',
          schools: 'Attend classes',
          schoolsShortVersion: 'Attend classes',
          internet: 'Telecom',
          internetShortVersion: 'Telecom',
        },
      },
      mobility: {
        name: 'Mobility',
        subtitle: 'Transport (restrictions)',
        measureValues: {
          '1': 'TOTAL',
          '2': 'PARTIAL',
          '3': 'NONE',
          '4': 'UNCLEAR',
        },
        measures: {
          commerce: 'Commerce',
          commerceShortVersion: 'Commerce',
          foreignersInbound: 'Foreigners (in)',
          foreignersInboundShortVersion: 'Foreigners (in)',
          foreignersOutbound: 'Foreigners (out)',
          foreignersOutboundShortVersion: 'Foreigners (out)',
          local: 'In between cities',
          localShortVersion: 'In between cities',
          nationalsInbound: 'Nationals (in)',
          nationalsInboundShortVersion: 'Nationals (in)',
          nationalsOutbound: 'Nationals (out)',
          nationalsOutboundShortVersion: 'Nationals (out)',
          stopovers: 'Stopovers',
          stopoversShortVersion: 'Stopovers',
          crossBorderWorkers: 'Cross border workers',
          crossBorderWorkersShortVersion: 'Cross border workers',
        },
      },
      reports: {
        name: 'Reports',
        subtitle: 'Coming Soon',
      },
    },
  },
  mapLegend: {
    no: 'NO LOCKDOWN',
    partial: 'PARTIAL LOCKDOWN',
    full: 'FULL LOCKDOWN',
    noData: 'NO DATA',
    cases: 'COVID (REPORTED)',
  },
};

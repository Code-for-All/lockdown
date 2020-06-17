import { Component } from 'preact';
import { html } from 'htm/preact';
import { router } from '../router.js';
import { dialogService } from '../services/dialogService.js';
import css from 'csz';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import CountriesSearcher from './CountriesSearcher.js';

const mapbox_token = 'pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrODcwb29vajBjMDkzbWxqZHh6ZDU5aHUifQ.BjT63Mdh-P2myNvygIhSpw';

const selectStyles = css`
  & {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
const blank = css`
  & {
    display: none;
  }
`;

// Coordinates based on TLDs for desktop
const domainCoors = {
  // zoom/lat/long
  asia: { lng: 105.04, lat: 20.13, zoom: 2.04 }, // Asia - https://projectlockdown.asia/#2.04/20.13/105.04
  eu: { lng: 26.81, lat: 55.71, zoom: 2.12 }, // Europe - https://projectlockdown.eu/#2.12/55.71/26.81
  us: { lng: -98.22, lat: 37.68, zoom: 2.7 }, // North Americas - https://projectlockdown.us/#2.7/37.68/-98.22
  africa: { lng: 14.63, lat: 2.61, zoom: 1.88 }, // Africa - https://projectlockdown.africa/#1.88/2.61/14.63
  lat: { lng: -36, lat: -20.2, zoom: 1.56 }, // South Americas - https://projectlockdown.lat/#1.56/-20.2/-36
  me: { lng: 53.39, lat: 26.28, zoom: 3.19 }, // Middle East - https://projectlockdown.me/#3.19/26.28/53.39
};

// Coordinates based on TLDs for mobile
const domainCoorsMobile = {
  // zoom/lat/long
  asia: { lng: 89.9, lat: 36.2, zoom: 1.15 }, // Asia - https://projectlockdown.asia/#1.15/36.2/89.9
  eu: { lng: 21.5, lat: 50.4, zoom: 1.52 }, // Europe - https://projectlockdown.eu/#1.52/50.4/21.5
  us: { lng: -98.37, lat: 43.09, zoom: 2 }, // North Americas - https://projectlockdown.us/#2/43.09/-98.37
  africa: { lng: 26.4, lat: 14.4, zoom: 1.43 }, // Africa - https://projectlockdown.africa/#1.43/14.4/26.4
  lat: { lng: -63.6, lat: -16.4, zoom: 1.44 }, // South Americas - https://projectlockdown.lat/#1.44/-16.4/-63.6
  me: { lng: 53.4, lat: 22, zoom: 1.08 }, // Middle East - https://projectlockdown.me/#1.08/22/53.4
};

// Use for altering boundaries of countries with disputed areas
// Options: https://docs.mapbox.com/vector-tiles/reference/mapbox-boundaries-v3/#--polygon---worldview-text
const selectedWorldview = 'US';

const pause = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

// Colors for different lockdown status
function worldStyle(lockdown_status) {
  let value;
  switch (lockdown_status) {
    case '1':
      value = '#eb5757'; //yes
      break;
    case '2':
      value = '#f2994a'; //partial
      break;
    case '3':
      value = '#6fcf97'; //no
      break;
    default:
      value = '#ccc'; //undefined or no value
  }

  return value;
}

function filterLookupTable(lookupTable) {
  let lookupData = {};

  for (let layer in lookupTable)
    for (let worldview in lookupTable[layer].data)
      for (let feature in lookupTable[layer].data[worldview]) {
        let featureData = lookupTable[layer].data[worldview][feature];

        if (worldview === 'all' || worldview === selectedWorldview) {
          lookupData[featureData['unit_code']] = featureData;
        }
      }
  return lookupData;
}

export class WorldMap extends Component {
  constructor() {
    super();
    this.__handleSelect = this.__handleSelect.bind(this);
    this.initMap = this.initMap.bind(this);
    this.updateMap = this.updateMap.bind(this);
    this.updateMapLanguage = this.updateMapLanguage.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.onGetResult = this.onGetResult.bind(this);

    let coords = { lng: 40.7, lat: 25, zoom: 1.06 }; //default coordinates
    let deviceCoords = coords;

    // If it is a mobile device get the cooridnates for mobile (domainCoorsMobile), else get the desktop coordinates (domainCoors)
    if (screen.width <= 699) deviceCoords = domainCoorsMobile;
    else deviceCoords = domainCoors;

    let url = window.location.href;
    let isLocationSet = false;
    for (let country in deviceCoords) {
      if (url.indexOf('lockdown.' + country) != -1) {
        coords = deviceCoords[country];
        isLocationSet = true;
      }
    }
    this.state = {
      lng: coords.lng,
      lat: coords.lat,
      zoom: coords.zoom,
      countries: [],
      mapData: {},
      lookupTable: {},
      isMapReady: false,
      isLocationSet: isLocationSet,
      geocoder: {},
      lastCountry: {},
    };
  }

  setMapState(map, localData = [], lookupData) {
    const localDataByIso = {};
    localData.forEach((l) => (localDataByIso[l.lockdown.iso] = l));
    Object.keys(lookupData).forEach((key) => {
      var lookup = lookupData[key];
      var countryInfo = localDataByIso[key];
      map.setFeatureState(
        {
          source: 'admin-0',
          sourceLayer: 'boundaries_admin_0',
          id: lookup.feature_id,
        },
        {
          kind: countryInfo?.lockdown?.measure[0]?.value,
          name: key,
        }
      );
    });
  }

  async initMap(mapData, lookupTable) {
    if (!window.mapboxgl) {
      console.log('check the map');
      await pause();
      await this.initMap(mapData, lookupTable);
    }
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
      null,
      true // Lazy load the plugin
    );
    let map = new window.mapboxgl.Map({
      accessToken: mapbox_token,
      container: this.ref,
      // style: 'mapbox://styles/jfqueralt/ck9hi7wl616pz1iugty1cpeiv?optimize=true',
      style: 'mapbox://styles/jfqueralt/ckavedmnk253z1iphmsy39s3r?optimize=true',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      keyboard: false,
      pitchWithRotate: false,
      hash: true,
    });
    let geocoder = new window.MapboxGeocoder({
      accessToken: mapbox_token,
      language: this.props.currentLanguage ? this.props.currentLanguage.locale : 'es',
      mapboxgl: window.mapboxgl,
      types: 'country',
    });
    geocoder.on('results', this.onGetResult);
    geocoder.addTo('#mapBlank');
    window.map = map;
    // we dont need to remap small mapData
    // const localData = mapData.features.map((f) => {
    //   return { ISO: f.properties.iso2, lockdown_status: f.properties.lockdown_status, name: f.properties.NAME };
    // });

    const localData = mapData[this.props.selectedDate];

    map.on('style.load', () => {
      let hoveredStateId = null;
      let iso = this.props.currentLanguage.locale;
      if (iso.includes('zh-')) {
        if (iso.includes('-CN')) {
          iso = 'zh-Hans';
        } else {
          iso = 'zh-Hant';
        }
      } else {
        iso = iso.split('-')[0];
      }
      map.setLayoutProperty('water-line-label', 'text-field', ['get', 'name_' + iso]);
      map.setLayoutProperty('country-label', 'text-field', ['get', 'name_' + iso]);
      map.setLayoutProperty('water-point-label', 'text-field', ['get', 'name_' + iso]);
      map.on('mousemove', 'admin-0-fill', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['admin-0-fill'],
        });

        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              {
                source: 'admin-0',
                sourceLayer: 'boundaries_admin_0',
                id: hoveredStateId,
              },
              {
                hover: false,
              }
            );
          }

          hoveredStateId = features[0].id;

          map.setFeatureState(
            {
              source: 'admin-0',
              sourceLayer: 'boundaries_admin_0',
              id: hoveredStateId,
            },
            {
              hover: true,
            }
          );
        }
      });
      map.on('click', 'admin-0-fill', this.onMapClick);

      console.log('the style is loaded');
    });

    map.on('load', function () {
      console.log('map is loaded');
      createViz(lookupTable);
    });

    const createViz = (lookupTable) => {
      map.addSource('admin-0', {
        type: 'vector',
        url: 'mapbox://mapbox.boundaries-adm0-v3',
      });

      const lookupData = filterLookupTable(lookupTable);

      // Filters the lookup table to features with the 'US' country code
      // and keys the table using the `unit_code` property that will be used for the join

      map.addLayer(
        {
          id: 'admin-0-fill',
          type: 'fill',
          source: 'admin-0',
          'source-layer': 'boundaries_admin_0',
          // Show only features for the selected worldview, hide disputed polygons
          filter: [
            'all',
            ['any', ['==', 'all', ['get', 'worldview']], ['in', selectedWorldview, ['get', 'worldview']]],
            ['!', ['has', 'dispute']],
          ],
          paint: {
            'fill-color': [
              'case',
              ['!=', ['feature-state', 'kind'], null],
              // ['to-color', ['get', ['feature-state', 'color']]],
              // 'rgba(171,56,213,0.5)',
              [
                'match',
                ['feature-state', 'kind'],
                '1',
                worldStyle('1'),
                '2',
                worldStyle('2'),
                '3',
                worldStyle('3'),
                '4',
                worldStyle('4'),
                worldStyle('0'),
              ],
              // No data
              ['==', ['feature-state', 'kind'], null],
              worldStyle('0'),
              ['case', ['boolean', ['feature-state', 'hover'], false], 'rgba(204,204,204,0.5)', 'rgba(204,204,204,0)'],
            ],
            // Hover style
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.7, 1],
          },
        },
        'admin-1-boundary-bg'
      );

      //
      // Map style adjustments
      //

      // Improve contrast of country country labels
      map.setPaintProperty('country-label', 'text-color', 'hsl(0, 0%, 10%)');
      map.setPaintProperty('country-label', 'text-halo-color', 'hsla(0, 0%, 100%,0.6)');
      map.setPaintProperty('country-label', 'text-halo-width', 1);

      // Improve contrast of country state labels
      map.setPaintProperty('state-label', 'text-color', 'hsl(0, 0%, 30%)');
      map.setPaintProperty('state-label', 'text-halo-width', 0);

      // Improve contrast of country lines
      map.setPaintProperty('admin-0-boundary', 'line-color', 'hsla(0, 0%, 90%, 0.8)');
      map.setPaintProperty('admin-0-boundary-disputed', 'line-color', 'hsla(0, 0%, 90%, 0.5)');
      map.setPaintProperty('admin-0-boundary-bg', 'line-color', 'hsla(0, 0%, 84%, 0.3)');

      // Improve contrast of state lines
      map.setPaintProperty('admin-1-boundary', 'line-color', 'hsla(0, 0%, 90%, 0.6)');

      // Improve contrast of city labels
      map.setPaintProperty('settlement-major-label', 'text-halo-width', 0);
      map.setPaintProperty('settlement-minor-label', 'text-halo-width', 0);

      // Change water color
      map.setPaintProperty('water', 'fill-color', '#e0e0e0');

      const setStates = (e) => {
        localData.forEach(function (row) {
          map.setFeatureState(
            {
              source: 'admin-0',
              sourceLayer: 'boundaries_admin_0',
              id: lookupData[row.lockdown.iso].feature_id,
            },
            {
              kind: row.lockdown.measure[0].value,
              name: row.lockdown.iso,
            }
          );
        });

        this.setState({
          isMapReady: true,
        });
      };

      // Check if `statesData` source is loaded.
      function setAfterLoad(e) {
        if (e.sourceId === 'admin-0' && e.isSourceLoaded) {
          setStates();
          map.off('sourcedata', setAfterLoad);
        }
      }

      // If `statesData` source is loaded, call `setStates()`.
      if (map.isSourceLoaded('admin-0')) {
        setStates();
      } else {
        map.on('sourcedata', setAfterLoad);
      }
    };

    this.setState({
      map,
      geocoder,
    });

    return map;
  }

  async updateMap(mapData, lookupTable, selectedDate) {
    const lookupData = filterLookupTable(lookupTable);
    let localData = mapData[selectedDate];
    if (localData === undefined) {
      let { startDate, endDate } = this.props;
      startDate = startDate ? format(startDate, 'yyyy-MM-dd') : format(addDays(new Date(), -14), 'yyyy-MM-dd');
      endDate = endDate ? format(endDate, 'yyyy-MM-dd') : format(addDays(new Date(), 56), 'yyyy-MM-dd');
      let [newMapData] = await Promise.all([
        fetch(new URL(`https://lockdownsnapshots-apim.azure-api.net/status/world/${startDate}/${endDate}`, import.meta.url)).then((r) =>
          r.json()
        ),
      ]);
      localData = newMapData[selectedDate];
      mapData = newMapData;
      this.setState({ mapData }, () => this.setMapState(this.state.map, localData, lookupData));
    } else {
      this.setMapState(this.state.map, localData, lookupData);
    }
  }

  updateMapLanguage(language) {
    let iso = language.locale;
    this.state.geocoder.setLanguage(iso);
    if (iso.includes('zh-')) {
      if (iso.includes('-CN')) {
        iso = 'zh-Hans';
      } else {
        iso = 'zh-Hant';
      }
    }
    this.state.map.setLayoutProperty('water-line-label', 'text-field', ['get', 'name_' + iso]);
    this.state.map.setLayoutProperty('water-point-label', 'text-field', ['get', 'name_' + iso]);
    let map = this.state.map.setLayoutProperty('country-label', 'text-field', ['get', 'name_' + iso]);
  }

  async componentDidMount() {
    dialogService.addEventListener('close', (e) => {
      if (e.detail.countryDialogClosed) {
        form.focus();
      }
    });

    let { startDate, endDate } = this.props;
    startDate = startDate ? format(startDate, 'yyyy-MM-dd') : format(addDays(new Date(), -14), 'yyyy-MM-dd');
    endDate = endDate ? format(endDate, 'yyyy-MM-dd') : format(addDays(new Date(), 56), 'yyyy-MM-dd');
    // the world map needs a large data source, lazily fetch them in parallel
    const [mapData, lookupTable] = await Promise.all([
      fetch(new URL(`https://lockdownsnapshots-apim.azure-api.net/status/world/${startDate}/${endDate}`, import.meta.url)).then((r) =>
        r.json()
      ),
      fetch(new URL('./../../data/boundaries-adm0-v3.json', import.meta.url)).then((r) => r.json()),
    ]);

    // no need for small worldmap
    // for (const feature of mapData.features) {
    //   feature.properties.color = worldStyle(feature);
    // }

    // we need to prepare a static country list not dynamically calculate them
    const countries = Object.values[lookupTable];

    this.setState({
      countries,
      mapData,
      lookupTable,
    });

    await this.initMap(mapData, lookupTable);
  }

  onMapClick(e) {
    let { map, lookupTable } = this.state;
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['admin-0-fill'],
    });
    this.state.geocoder.query(lookupTable.adm0.data.all[features[0].properties.iso_3166_1].name);
    this.setState({
      lastCountry: {
        country: lookupTable.adm0.data.all[features[0].properties.iso_3166_1].name,
        iso2: features[0].properties.iso_3166_1,
      },
    });
  }

  componentWillUnmount() {
    this.state.map && this.state.map.remove();
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    if (this.state.isMapReady) {
      this.updateMap(this.state.mapData, this.state.lookupTable, this.props.selectedDate);
      if (previousProps.currentLanguage !== this.props.currentLanguage) {
        this.updateMapLanguage(this.props.currentLanguage);
      }
    }
  }

  __handleSelect(e) {
    e.preventDefault();
    const [iso2, country] = this.selectRef.value.split(',');
    router.setSearchParam('country', country);
    router.setSearchParam('iso2', iso2);
  }

  __resetFocus() {
    this.countrySelectRef.focus();
  }

  onGetResult(results) {
    let { features } = results;
    if (features[0]) {
      let countryName = features[0].text;
      router.setSearchParam('country', countryName);
      router.setSearchParam('iso2', this.state.lastCountry.iso2);
    } else {
      router.setSearchParam('country', this.state.lastCountry.countryName);
      router.setSearchParam('iso2', this.state.lastCountry.iso2);
    }
  }

  render({ currentLanguage }) {
    return html`
      <div class="${selectStyles}">
        <form id="form" tabindex="-1" onSubmit=${this.__handleSelect}>
          <label for="countries">Choose a country:</label>
          <select ref=${(ref) => (this.selectRef = ref)} id="countries">
            ${this.state.countries?.map((country) => html`<option value="${country.ISO},${country.name}">${country.name}</option>`)}
          </select>
          <input type="submit" value="View country details"></input>
        </form>
      </div>
      <${CountriesSearcher} i18n=${currentLanguage} map=${this.state.map} />
      <div class="map-container" ref=${(ref) => (this.ref = ref)}></div>
      <span id="mapBlank" class="${blank}"></span>
    `;
  }
}

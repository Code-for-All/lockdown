import { Component } from 'preact';
import { html } from 'htm/preact';
import { router } from '../router.js';
import { dialogService } from '../services/dialogService.js';
import css from 'csz';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

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

const domainCoors = {
  // zoom/lat/long
  // Asia - https://projectlockdown.asia/#2.28/46.38/89.53
  asia: { lng: 89.53, lat: 46.38, zoom: 2.28 }, 
  // Europe - https://projectlockdown.eu/#3.44/54.21/15.42
  eu: { lng: 15.42, lat: 54.21, zoom: 3.44 },
  // North Americas - https://projectlockdown.us/#2.2/59.26/-91.21
  us: { lng: -91.21, lat: 59.26, zoom: 2.2 }, 
  // Africa - https://projectlockdown.africa/#3.2/4.21/21.53
  africa: { lng: 21.53, lat: 4.21, zoom: 3.2 }, 
  // South Americas - https://projectlockdown.lat/#2.76/-20.13/-56.71 
  lat: { lng: -56.71, lat: -20.13, zoom: 2.76}, 
};

const domainCoorsMobile = {
  // zoom/lat/long
  // Asia - #1.15/43.3/85.1
  asia: { lng: 85.1, lat: 43.3, zoom: 1.15 }, 
  // Europe - #1.99/55.92/9.5
  eu: { lng: 9.5, lat: 55.92, zoom: 1.99 },
  // North Americas - #1.04/49.5/-100.6
  us: { lng: -100.6, lat: 49.5, zoom: 1.04 }, 
  // Africa - #1.83/7.31/23.39
  africa: { lng: 23.39, lat: 7.31, zoom: 1.83 }, 
  // South Americas - #1.98/-18.36/-61.66 
  lat: { lng: -61.66, lat: -18.36, zoom: 1.98}, 
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

    let coords = { lng: 40.7, lat: 25, zoom: 1.06 }; //default coordinates
    let deviceCoords = coords;

    // If it is a mobile device get the cooridnates for mobile (domainCoorsMobile), else get the desktop coordinates (domainCoors)
    if (screen.width <= 699)
        deviceCoords = domainCoorsMobile;
    else 
        deviceCoords = domainCoors;

    let url = window.location.href;
    let isLocationSet = false;
    for (let country in domainCoors) {
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
      map.on('click', 'admin-0-fill', function (e) {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['admin-0-fill'],
        });
        router.setSearchParam('country', lookupTable.adm0.data.all[features[0].properties.iso_3166_1].name);
        router.setSearchParam('iso2', features[0].properties.iso_3166_1);
      });

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
    console.log(language);
    let iso = language.locale;
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

    if (navigator.permissions) {
      const geolocation = await navigator.permissions.query({ name: 'geolocation' });
      // on pageload, check if there is permission for geolocation
      if (geolocation.state === 'granted' && !this.state.isLocationSet) {
        navigator.geolocation.getCurrentPosition((location) => {
          const { latitude, longitude } = location.coords;

          this.state.map.setCenter([longitude, latitude]);
          this.setState({
            isLocationSet: true,
          });
        });
      }

      // handle change when user toggles geolocation permission
      geolocation.addEventListener('change', (e) => {
        if (e.target.state === 'granted' && !this.state.isLocationSet) {
          navigator.geolocation.getCurrentPosition((location) => {
            localStorage.setItem('geolocation', 'true');
            const { latitude, longitude } = location.coords;
            this.state.map.setCenter([longitude, latitude]);
            this.setState({
              isLocationSet: true,
            });
          });
        } else {
          localStorage.removeItem('geolocation');
        }
      });
    }
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

  render() {
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
      <div class="map-container" ref=${(ref) => (this.ref = ref)}></div> 
    `;
  }
}

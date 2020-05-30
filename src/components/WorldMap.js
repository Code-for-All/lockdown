import { Component } from 'preact';
import { html } from 'htm/preact';
import { router } from '../router.js';
import { dialogService } from '../services/dialogService.js';
import css from 'csz';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

const mapbox_token = 'pk.eyJ1IjoiamZxdWVyYWx0IiwiYSI6ImNrOWZpZHF3ajBic2YzbHQwYzQ5bGRnaXgifQ.NcQInXQmMy93L47QBMCAfg';

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
  asia: { lng: 95.955971, lat: 21.916222, zoom: 2.8 }, //Burma
  europe: { lng: 52.160455, lat: 10.371094, zoom: 4 }, //Germany
  usa: { lng: 45.089036, lat: -100.898438, zoom: 3 },
  africa: { lng: 21.525828, lat: 4.214943, zoom: 3.2 }, //Somewhere in Africa :)
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
  console.log('sadsad' + lockdown_status);
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

function worldPattern(lockdown_status) {
  let value;
  console.log(lockdown_status);
  switch (lockdown_status) {
    case '1':
      value = 'thisNeedToBeAEmptyImg'; //yes
      break;
    case '2':
      value = 'thisNeedToBeAEmptyImg'; //partial
      break;
    case '3':
      value = 'thisNeedToBeAEmptyImg'; //no
      break;
    case '4':
      value = 'pattern'; //unclear
      break;
    default:
      value = 'thisNeedToBeAEmptyImgAlways'; //The layer always use this Style
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

    let coords = { lng: 40.7, lat: 25, zoom: 1.06 };

    let url = window.location.href;
    let isLocationSet = false;
    for (let country in domainCoors) {
      if (url.indexOf('lockdown.' + country) != -1) {
        coords = domainCoors[country];
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
      style: 'mapbox://styles/jfqueralt/ck9hi7wl616pz1iugty1cpeiv?optimize=true',
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

      map.on('mousemove', 'admin-0-fill', function (e) {
        console.log(map.getStyle().layers);
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['admin-0-fill'],
        });
        console.log(map.queryRenderedFeatures({ layers: ['admin-0-pattern'] }));
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
    map.on('styleimagemissing', function (e) {
      var id = e.id; // id of the missing image
      console.log(e);
      let width = 64; // The image will be 64 pixels square
      let bytesPerPixel = 4; // Each pixel is represented by 4 bytes: red, green, blue, and alpha.

      let data = new Uint8Array(width * width * bytesPerPixel);

      for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
          var offset = (y * width + x) * bytesPerPixel;
          data[offset + 0] = 193; // red
          data[offset + 1] = 66; // green
          data[offset + 2] = 66; // blue
          data[offset + 3] = 0.0;
        }
      }
      map.addImage(id, { width: width, height: width, data: data });
    });

    const createViz = (lookupTable) => {
      map.addSource('admin-0', {
        type: 'vector',
        url: 'mapbox://mapbox.boundaries-adm0-v3',
      });

      const lookupData = filterLookupTable(lookupTable);

      map.loadImage('/Assets/mapTexture.png', function (err, image) {
        //Throw an error if something went wrong
        if (err) throw err;

        // Declare the image
        map.addImage('pattern', image);
      });

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
            // 'fill-pattern': [
            //     'case',
            //     ['==',
            //     ['feature-state', 'kind'],'4'],
            //     'pattern',
            //     ''
            // ],
            // 'pattern',
            // Hover style
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.7, 1],
          },
        },
        'admin-1-boundary-bg'
      );

      map.addLayer(
        {
          id: 'admin-0-pattern',
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
            // 'fill-pattern': 'pattern',
            'fill-pattern': [
              'case',
              ['!=', ['feature-state', 'kind'], null],
              [
                'match',
                ['feature-state', 'kind'],
                '1',
                worldPattern(1),
                '2',
                worldPattern(2),
                '3',
                worldPattern(3),
                '4',
                worldPattern(4),
                worldPattern(0),
              ],
              // No data
              ['==', ['feature-state', 'kind'], null],
              worldPattern(0),
              '',
            ],
            // 'pattern',
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
        // Start a case expression for the pattern fill
        let fillPatternExpression = ['case'];

        localData.forEach(function (row) {
          // Add the condition and output value for the pattern
          fillPatternExpression.push(['==', ['id'], lookupData[row.lockdown.iso].feature_id]);
          fillPatternExpression.push(worldPattern(row.lockdown.measure[0].value));

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

        // Add fallback pattern
        fillPatternExpression.push(worldPattern(0));

        // Update layer style
        map.setPaintProperty('admin-0-pattern', 'fill-pattern', fillPatternExpression);

        // DEBUG
        console.log(fillPatternExpression);

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

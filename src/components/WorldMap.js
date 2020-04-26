import { Component } from 'preact';
import { html } from 'htm/preact';
import { router } from '../router.js';
import { dialogService } from '../services/dialogService.js';
import css from 'csz';

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
  asia: [21.943046, 96.240234], //Burma
  europe: [52.160455, 10.371094], //Germany
  usa: [45.089036, -100.898438],
};

const pause = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

function worldStyle(lockdown_status) {
  let value;
  switch (lockdown_status) {
    case '1':
      value = '#6fcf97';
      break;
    case '2':
      value = '#7aaeff';
      break;
    case '3':
      value = '#eb5757';
      break;
    case '4':
      value = '#f2994a';
      break;
    default:
      value = '#CCCCCC';
  }

  return value;
}

export class WorldMap extends Component {
  constructor() {
    super();
    this.__handleSelect = this.__handleSelect.bind(this);
    this.initMap = this.initMap.bind(this);

    let coords = [0, 0];
    let zoom = 2;

    let url = window.location.href;
    let islocationSet = false;
    for (let country in domainCoors) {
      if (url.indexOf('lockdown.' + country) != -1) {
        coords = domainCoors[country];
        zoom = 4;
        islocationSet = true;
      }
    }

    this.state = {
      lng: coords[1],
      lat: coords[0],
      zoom,
      islocationSet,
    };
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
    });

    window.map = map;

    // we dont need to remap small mapData
    // const localData = mapData.features.map((f) => {
    //   return { ISO: f.properties.iso2, lockdown_status: f.properties.lockdown_status, name: f.properties.NAME };
    // });

    const localData = mapData;

    map.on('style.load', () => {
      let hoveredStateId = null;

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

        // console.log('features', features[0]);
        // map.fitBounds(layer.getBounds());
        router.setSearchParam('country', features[0].state.name);
        router.setSearchParam('iso2', features[0].properties.iso_3166_1);
      });
    });

    map.on('load', function () {
      console.log('map is loaded');
      createViz(lookupTable);
    });

    function createViz(lookupTable) {
      map.addSource('admin-0', {
        type: 'vector',
        url: 'mapbox://mapbox.boundaries-adm0-v3',
      });

      const lookupData = filterLookupTable(lookupTable);

      // Filters the lookup table to features with the 'US' country code
      // and keys the table using the `unit_code` property that will be used for the join
      function filterLookupTable(lookupTable) {
        let lookupData = {};

        for (let layer in lookupTable)
          for (let worldview in lookupTable[layer].data)
            for (let feature in lookupTable[layer].data[worldview]) {
              let featureData = lookupTable[layer].data[worldview][feature];

              if (worldview === 'all' || worldview === 'US') {
                lookupData[featureData['unit_code']] = featureData;
              }
            }
        return lookupData;
      }

      map.addLayer(
        {
          id: 'admin-0-fill',
          type: 'fill',
          source: 'admin-0',
          'source-layer': 'boundaries_admin_0',
          filter: ['any', ['==', 'all', ['get', 'worldview']], ['in', 'US', ['get', 'worldview']]],
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
                /* other */ '#CCCCCC',
              ],
              ['case', ['boolean', ['feature-state', 'hover'], false], 'rgba(204,204,204,0.5)', 'rgba(204,204,204,0)'],
            ],
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.7, 1],
          },
        },
        'waterway-label'
      );

      function setStates(e) {
        // console.log('setStates');
        localData.forEach(function (row) {
          // console.log('row.ISO', row.ISO);
          // console.log('lookupData[row.ISO]', lookupData[row.ISO]);
          // console.log('row.lockdown_status', row.lockdown_status);
          map.setFeatureState(
            {
              source: 'admin-0',
              sourceLayer: 'boundaries_admin_0',
              id: lookupData[row.ISO].feature_id,
            },
            {
              kind: row.lockdown_status,
              name: row.name,
            }
          );
        });
      }

      // Check if `statesData` source is loaded.
      function setAfterLoad(e) {
        // console.log('setAfterLoad');
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
    }

    this.setState({
      map,
    });

    return map;
  }

  async componentDidMount() {
    dialogService.addEventListener('close', (e) => {
      if (e.detail.countryDialogClosed) {
        form.focus();
      }
    });

    // the world map needs a large data source, lazily fetch them in parallel
    const [mapData, lookupTable] = await Promise.all([
      fetch(new URL('../../data/worldmap_small.json', import.meta.url)).then((r) => r.json()),
      fetch(new URL('./../../data/boundaries-adm0-v3.json', import.meta.url)).then((r) => r.json()),
    ]);

    // no need for small worldmap
    // for (const feature of mapData.features) {
    //   feature.properties.color = worldStyle(feature);
    // }

    this.setState({
      countries: mapData,
    });

    await this.initMap(mapData, lookupTable);

    if (navigator.permissions) {
      const geolocation = await navigator.permissions.query({ name: 'geolocation' });
      // on pageload, check if there is permission for geolocation
      if (geolocation.state === 'granted') {
        navigator.geolocation.getCurrentPosition((location) => {
          const { latitude, longitude } = location.coords;

          this.state.map.setCenter([longitude, latitude]);
          this.setState({
            islocationSet: true,
          });
        });
      }

      // handle change when user toggles geolocation permission
      geolocation.addEventListener('change', (e) => {
        if (e.target.state === 'granted') {
          navigator.geolocation.getCurrentPosition((location) => {
            localStorage.setItem('geolocation', 'true');
            const { latitude, longitude } = location.coords;
            this.state.map.setCenter([longitude, latitude]);
            this.setState({
              islocationSet: true,
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

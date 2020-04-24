import { Component } from 'preact';
import { html } from 'htm/preact';
import { router } from '../router.js';
import { dialogService } from '../services/dialogService.js';
import css from 'csz';

const mapbox_token = 'pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g';

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

const pause = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

function worldStyle(e) {
  let value;
  switch (e.properties.lockdown_status) {
    case '1':
      value = '#9fc184';
      break;
    case '2':
      value = '#769de2';
      break;
    case '3':
      value = '#d36d6b';
      break;
    case '4':
      value = '#ebb577';
      break;
    default:
      value = '#828282';
  }

  return value;
}

export class WorldMap extends Component {
  constructor() {
    super();
    this.__handleSelect = this.__handleSelect.bind(this);

    this.state = {
      lng: 0,
      lat: 0,
      zoom: 2,
    };
  }

  initMap = async (mapData) => {
    if (!window.mapboxgl) {
      console.log('check the map');
      await pause();
      await this.initMap();
    }
    let map = new window.mapboxgl.Map({
      accessToken: mapbox_token,
      container: this.ref,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    window.map = map;

    map.on('style.load', () => {
      console.log('add source');
      map.addSource('countries', {
        type: 'geojson',
        data: mapData,
        generateId: true,
      });

      console.log('add layer');
      map.addLayer({
        id: 'countries',
        type: 'fill',
        source: 'countries',
        layout: {},
        paint: {
          'fill-color': ['get', 'color'],
          'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.8, 0.4],
        },
        filter: ['has', 'color'],
      });

      let hoveredStateId = null;

      map.on('mousemove', 'countries', function (e) {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              {
                source: 'countries',
                id: hoveredStateId,
              },
              {
                hover: false,
              }
            );
          }

          hoveredStateId = e.features[0].id;

          map.setFeatureState(
            {
              source: 'countries',
              id: hoveredStateId,
            },
            {
              hover: true,
            }
          );
        }
      });
      map.on('click', 'countries', function (e) {
        // map.fitBounds(layer.getBounds());
        router.setSearchParam('country', e.features[0].properties.NAME);
        router.setSearchParam('iso2', e.features[0].properties.iso2);
      });
    });

    map.on('load', function () {
      console.log('map is loaded');
    });

    this.setState({
      map,
    });

    return map;
  };

  async componentDidMount() {
    dialogService.addEventListener('close', (e) => {
      if (e.detail.countryDialogClosed) {
        form.focus();
      }
    });

    // the world map needs a large data source, lazily fetch them in parallel
    const [mapData] = await Promise.all([fetch(new URL('../../data/worldmap.json', import.meta.url)).then((r) => r.json())]);

    for (const feature of mapData.features) {
      feature.properties.color = worldStyle(feature);
    }

    this.setState({
      countries: mapData.features,
    });

    await this.initMap(mapData);

    if (navigator.permissions) {
      const geolocation = await navigator.permissions.query({ name: 'geolocation' });
      // on pageload, check if there is permission for geolocation
      if (geolocation.state === 'granted') {
        navigator.geolocation.getCurrentPosition((location) => {
          const { latitude, longitude } = location.coords;

          this.state.map.setCenter([longitude, latitude]);
        });
      }

      // handle change when user toggles geolocation permission
      geolocation.addEventListener('change', (e) => {
        if (e.target.state === 'granted') {
          navigator.geolocation.getCurrentPosition((location) => {
            localStorage.setItem('geolocation', 'true');
            const { latitude, longitude } = location.coords;
            this.state.map.setCenter([longitude, latitude]);
          });
        } else {
          localStorage.removeItem('geolocation');
        }
      });
    }
  }

  componentWillUnmount() {
    this.state?.map.remove();
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
            ${this.state.countries?.map(
              (country) => html`<option value="${country.properties.iso2},${country.properties.NAME}">${country.properties.NAME}</option>`
            )}
          </select>
          <input type="submit" value="View country details"></input>
        </form>
      </div>
      <div class="map-container" ref=${(ref) => (this.ref = ref)}></div> 
    `;
  }
}

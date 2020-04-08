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

export class WorldMap extends Component {
  constructor() {
    super();
    this.__handleSelect = this.__handleSelect.bind(this);
  }
  async componentDidMount() {
    dialogService.addEventListener('close', (e) => {
      if (e.detail.countryDialogClosed) {
        this.countrySelectRef.setAttribute('tabindex', '-1');
        this.countrySelectRef.focus();
        this.countrySelectRef.removeAttribute('tabindex');
      }
    });

    // the world map needs a large data source, lazily fetch them in parallel
    const [mapData, leaflet] = await Promise.all([
      fetch(new URL('../../data/worldmap.json', import.meta.url)).then((r) => r.json()),
      import('leaflet/dist/leaflet-src.esm.js'),
    ]);
    const { Map, Browser, geoJSON, layerGroup, tileLayer } = leaflet;

    const map = new Map(this.ref, {
      center: [0, 0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false,
    });
    let themeLayer;
    let labelLayer = layerGroup();

    function onFeatureClicked(e) {
      const layer = e.target;
      // map.fitBounds(layer.getBounds());
      router.setSearchParam('country', layer.feature.properties.NAME);
      router.setSearchParam('iso2', layer.feature.properties.iso2);
    }

    function resetHighlight(e) {
      const layer = e.target;
      themeLayer.resetStyle(layer);
    }

    function highlightFeature(e) {
      const layer = e.target;
      layer.setStyle({
        fillOpacity: 0.5,
        name: 'test',
      });
      if (!Browser.ie && !Browser.opera && !Browser.edge) {
        layer.bringToFront();
      }
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: onFeatureClicked,
      });
    }

    tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=' + mapbox_token, {
      tileSize: 512,
      zoomOffset: -1,
      attribution:
        '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

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

      let lineOpacity;
      if (!navigator.onLine) {
        lineOpacity = 1;
      } else {
        lineOpacity = 0.1;
      }

      const style = {
        weight: 1,
        opacity: lineOpacity,
        color: '#555',
        fillOpacity: 0,
      };

      if (value) {
        style.fillColor = value;
        style.fillOpacity = 0.5;
      }
      return style;
    }

    themeLayer = geoJSON(mapData, {
      style: worldStyle,
      onEachFeature: onEachFeature,
    }).addTo(map);
    labelLayer.addTo(map);
    this.setState({
      map,
      countries: mapData.features,
    });

    if (navigator.permissions) {
      const geolocation = await navigator.permissions.query({ name: 'geolocation' });
      // on pageload, check if there is permission for geolocation
      if (geolocation.state === 'granted') {
        navigator.geolocation.getCurrentPosition((location) => {
          const { latitude, longitude } = location.coords;
          this.state.map.setView([latitude, longitude]);
        });
      }

      // handle change when user toggles geolocation permission
      geolocation.addEventListener('change', (e) => {
        if (e.target.state === 'granted') {
          navigator.geolocation.getCurrentPosition((location) => {
            localStorage.setItem('geolocation', 'true');
            const { latitude, longitude } = location.coords;
            this.state.map.setView([latitude, longitude]);
          });
        } else {
          localStorage.removeItem('geolocation');
        }
      });
    }
  }

  componentWillUnmount() {
    this.state.map.remove();
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
        <div tabindex="-1" ref=${(ref) => (this.countrySelectRef = ref)}>
          <form onSubmit=${this.__handleSelect}>
            <label for="countries">Choose a country:</label>
            <select ref=${(ref) => (this.selectRef = ref)} id="countries">
              ${this.state.countries?.map(
                (country) => html`<option value="${country.properties.iso2},${country.properties.NAME}">${country.properties.NAME}</option>`
              )}
            </select>
            <input type="submit" value="View country details"></input>
          </form>
        </div>
      </div>
      <div style="width: 100%; height: 100%;" ref=${(ref) => (this.ref = ref)}></div> 
    `;
  }
}

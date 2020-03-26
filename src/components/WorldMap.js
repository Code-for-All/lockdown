import { Component } from 'preact';
import { html } from 'htm/preact';
import { router } from '../router.js';
import { lockdownsService } from '../services/locksdownsService.js';

const mapbox_token = 'pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g';
const today = new Date();

export class WorldMap extends Component {
  async componentDidMount() {
    // the world map needs a large data source, lazily fetch them in parallel
    const [lockdowns, mapData, leaflet] = await Promise.all([
      lockdownsService.getLockdowns(),
      fetch(new URL('../../data/worldmap.json', import.meta.url)).then(r => r.json()),
      import('leaflet/dist/leaflet-src.esm.js')
    ]);
    const { Map, Browser, geoJSON, layerGroup, tileLayer } = leaflet;

    const map = new Map(this.ref, {
      center: [0, 0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false
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
        name: 'test'
      });
      if (!Browser.ie && !Browser.opera && !Browser.edge) {
        layer.bringToFront();
      }
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: onFeatureClicked
      });
    }

    tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=' + mapbox_token, {
      tileSize: 512,
      zoomOffset: -1,
      attribution:
        '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function worldStyle(e) {
      // lockdown unknown
      let value = 'orange';

      if (e.properties.data && e.properties.data.lockdowns) {
        if (e.properties.data.lockdowns.length === 0) {
          // no known lockdowns
          value = 'green';
        }

        for (const lockdown of e.properties.data.lockdowns) {
          // TODO: start and end are exclusive or inclusive?
          if (new Date(lockdown.start) >= today && lockdown.end ? new Date(lockdown.end) < today : true) {
            // in lockdown
            value = 'red';
          } else {
            // lockdown expired
            value = 'green';
          }
        }
      }

      const style = {
        weight: 1,
        opacity: 0.1,
        color: '#555',
        fillOpacity: 0
      };

      if (value) {
        style.fillColor = value;
        style.fillOpacity = 0.5;
      }
      return style;
    }

    for (const feature of mapData.features) {
      if (lockdowns[feature.properties.NAME]) {
        feature.properties.data = lockdowns[feature.properties.NAME];
      }
    }

    themeLayer = geoJSON(mapData, {
      style: worldStyle,
      onEachFeature: onEachFeature
    }).addTo(map);
    labelLayer.addTo(map);
    this.setState({
      map
    });
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  render() {
    return html`
      <div
        style="width: 100%"
        ref=${ref => {
          this.ref = ref;
        }}
      ></div>
    `;
  }
}

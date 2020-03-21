import { Component } from 'preact';
import { html } from 'htm/preact';
import { Map, Browser, geoJSON, layerGroup, tileLayer } from 'leaflet/dist/leaflet-src.esm.js';
import Slider from './Slider.js';

const mapbox_token = 'pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g';
const today = new Date();

class WorldMap extends Component {
  async componentDidMount() {
    const mapData = await (await fetch(new URL('../../data/worldmap.json', import.meta.url))).json();
    const themeData = await (await fetch(new URL('../../data/datafile.json', import.meta.url))).json();

    const map = new Map(this.ref, {
      center: [0, 0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false
    });
    let themeLayer;
    let labelLayer = layerGroup();

    function zoomToFeature(e) {
      const layer = e.target;
      map.fitBounds(layer.getBounds());
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
        click: zoomToFeature
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
      if (themeData[feature.properties.NAME]) {
        feature.properties.data = themeData[feature.properties.NAME];
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
        style="height: 100%"
        ref=${ref => {
          this.ref = ref;
        }}
      ></div>

      <${Slider} />
    `;
  }
}

export default WorldMap;

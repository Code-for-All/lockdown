/**
 * JavaScript to produce a map of csv data
 *
 * freely based on from (c) Ralph Straumann, www.ralphstraumann.ch, 2014
 * also see: https://leafletjs.com/examples/choropleth/
 * Questions: milo@codefor.nl
 *
 */


(function () {
  'use strict';
  $(document).ready(function () {
    var map = setMap();
    mapboxMap(map);
    addTheme(map);
  });

  Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
  }

  var labelLayer = L.layerGroup();
  var themeLayer;
  var themeField = "COVID 13-03";
  /**
   * Initialize the map
   */
  function setMap() {
    return new L.Map('map', {
      center: [0, 0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false
    });
  }


  // get color depending on population density value
  function getColor(d) {
    return d > 4096 ? '#800026' :
      d > 1024 ? '#BD0026' :
        d > 256 ? '#E31A1C' :
          d > 64 ? '#FC4E2A' :
            d > 16 ? '#FD8D3C' :
              d > 4 ? '#FEB24C' :
                d > 1 ? '#FED976' :
                  'transparent';
  }
  /**
   * Load Mapbox base layer
   * @param {*} map
   */
  function mapboxMap(map) {
    var mapbox_token = 'pk.eyJ1IjoibWlibG9uIiwiYSI6ImNrMGtvajhwaDBsdHQzbm16cGtkcHZlaXUifQ.dJTOE8FJc801TAT0yUhn3g';
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=' + mapbox_token, {
      tileSize: 512,
      zoomOffset: -1,
      attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  }

  function formatDate() {
    var temp = new Date("2020-03-13");
    var mydate = temp.getDate().pad(2).toString() + '-' + (temp.getMonth() + 1).pad(2).toString() + '-' + temp.getFullYear().toString()
    return mydate;
  }

  function addTheme(map) {

    function zoomToFeature(e) {
      var layer = e.target;
      map.fitBounds(layer.getBounds());
    }

    function resetHighlight(e) {
      var layer = e.target;
      themeLayer.resetStyle(layer);
    }

    function highlightFeature(e) {
      var layer = e.target;
      layer.setStyle({
        fillOpacity: .5,
        name: 'test'
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
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

    function worldStyle(e) {
      console.log(e);
      var value = 0;
      var data = {
        weight: 1,
        opacity: 0.1,
        color: '#555',
        fillOpacity: 0
      };
      if (value) {
        data.fillColor = getColor(value);
        data.fillOpacity = 0.5;
      }
      return data;
    };

    $.getJSON('./data/worldmap.geojson', function (mapdata) {
      $.getJSON('./data/datafile.json', function (themedata) {
        themeLayer = L.geoJSON(mapdata, {
          style: worldStyle,
          onEachFeature: onEachFeature
        }).addTo(map);
        labelLayer.addTo(map);
      });
    });

  }
  var init = function () {

    var slider = new rSlider({
      target: '#slider',
      values: ["today", "tomorrow", "2 days", "1 week", "2 weeks", "1 month", "in a quarter", "half a year"],
      range: true,
      set: ["tomorrow", "1 month"],
      onChange: function (vals) {
        console.log(vals);
      }
    });
  };
  window.onload = init;
})();

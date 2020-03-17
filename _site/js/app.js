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
    $(".navbar-burger").click(function () {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
    var map = setMap();
    mapboxMap(map);
    addTheme(map);
    init();
  });

  Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
  }

  var labelLayer = L.layerGroup();
  var themeLayer;

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
      var value;
      if (e.properties.data && e.properties.data.lockdowns) {
        $(e.properties.data.lockdowns).each(function (i, lockdown) {
          //Is a lockdown currently in effect?
          if (moment(lockdown.start) < moment() && moment(lockdown.end ? lockdown.end : moment().add(365,'day')) > moment()) {
            value = "red"
          }
        });
      }
      var style = {
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
    };

    $.getJSON('./data/worldmap.geojson', function (mapdata) {
      $.getJSON('./data/datafile.json', function (themedata) {
        $(mapdata.features).each(function (i, feature) {
          if (themedata[feature.properties.NAME]) {
            console.log(feature.properties.NAME);
            feature.properties.data = themedata[feature.properties.NAME];
          }
        });

        themeLayer = L.geoJSON(mapdata, {
          style: worldStyle,
          onEachFeature: onEachFeature
        }).addTo(map);
        labelLayer.addTo(map);
      });
    });

  }
  var init = function () {
    var values = [
      "today",
      moment().add(1, 'd').format('YYYY-MM-DD'),
      moment().add(2, 'd').format('YYYY-MM-DD'),
      moment().add(3, 'd').format('YYYY-MM-DD'),
      moment().add(4, 'd').format('YYYY-MM-DD'),
      moment().add(5, 'd').format('YYYY-MM-DD'),
      moment().add(6, 'd').format('YYYY-MM-DD'),
      moment().add(1, 'w').format('YYYY-MM-DD'),
      moment().add(2, 'w').format('YYYY-MM-DD'),
      moment().add(3, 'w').format('YYYY-MM-DD'),
      moment().add(1, 'M').format('YYYY-MM-DD'),
      moment().add(2, 'M').format('YYYY-MM-DD')
    ]
    var slider = new rSlider({
      target: '#slider',
      values: values,
      range: true,
      set: [values[1], values[3]],
      onChange: function (vals) {
        console.log(vals);
      }
    });
  };
})();

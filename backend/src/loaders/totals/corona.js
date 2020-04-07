import axios from 'axios';
import moment from 'moment-timezone';

const params = {
  where: '1=1',
  geometryType: 'esriGeometryEnvelope',
  spatialRel: 'esriSpatialRelIntersects',
  resultType: 'none',
  distance: '0.0',
  units: 'esriSRUnit_Meter',
  returnGeodetic: 'false',
  outFields: '*',
  returnGeometry: 'false',
  featureEncoding: 'esriDefault',
  multipatchOption: 'xyFootprint',
  applyVCSProjection: 'false',
  returnIdsOnly: 'false',
  returnUniqueIdsOnly: 'false',
  returnCountOnly: 'false',
  returnExtentOnly: 'false',
  returnQueryGeometry: 'false',
  returnDistinctValues: 'false',
  cacheHint: 'false',
  returnZ: 'false',
  returnM: 'false',
  returnExceededLimitFeatures: 'true',
  sqlFormat: 'none',
  f: 'pjson'
}

export async function sumCorona() {
  const url = 'https://services.arcgis.com/5T5nSi527N4F7luB/ArcGIS/rest/services/COVID_19_CasesByCountry(pt)_VIEW/FeatureServer/0/query';
  const response = await axios.get(url, {
    params
  });
  const data = response.data;
  const features = data.features;
  
  var total_confirmed = 0;
  var total_death = 0;

  features.forEach((feature) => {
    total_death += feature['attributes']['cum_death'];
    total_confirmed += feature['attributes']['cum_conf'];
    // TODO: anything to do with time?
    // feature['attributes']['DateOfDataEntry']
  });

  return {
    'date': moment().format(),
    'confirmed': total_confirmed,
    'deaths': total_death
  }
}

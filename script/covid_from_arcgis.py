import requests
import json
import datetime

url = 'https://services.arcgis.com/5T5nSi527N4F7luB/ArcGIS/rest/services/COVID_19_CasesByCountry(pt)_VIEW/FeatureServer/0/query'

params = dict(
    where='1=1',
    geometryType='esriGeometryEnvelope',
    spatialRel='esriSpatialRelIntersects',
    resultType='none',
    distance='0.0',
    units='esriSRUnit_Meter',
    returnGeodetic='false',
    outFields='*',
    returnGeometry='false',
    featureEncoding='esriDefault',
    multipatchOption='xyFootprint',
    applyVCSProjection='false',
    returnIdsOnly='false',
    returnUniqueIdsOnly='false',
    returnCountOnly='false',
    returnExtentOnly='false',
    returnQueryGeometry='false',
    returnDistinctValues='false',
    cacheHint='false',
    returnZ='false',
    returnM='false',
    returnExceededLimitFeatures='true',
    sqlFormat='none',
    f='pjson'
)

resp = requests.get(url=url, params=params)
data = resp.json() # Check the JSON Response Content documentation below
features = data['features']
result = []
for feature in features:
    # if 'ADMO_NAME' in feature['attributes'].keys():
    temp = {
        'name': feature['attributes']['ADM0_NAME'],
        'entered': datetime.datetime.fromtimestamp(feature['attributes']['DateOfDataEntry']/1000).strftime('%Y-%m-%dT%H:%M:00.0Z'),
        'confirmed': feature['attributes']['cum_conf'],
        'deaths': feature['attributes']['cum_death']
    }
    result.append(temp)
with open('../data/coronastatus.json', 'w') as f:
    json.dump(result, f, skipkeys=True, ensure_ascii=True,
              indent=2, separators=None, default=None, sort_keys=True)
    

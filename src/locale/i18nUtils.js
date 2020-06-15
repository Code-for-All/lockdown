export const encodeJsonTranslation = (json) => {
  if (typeof json === 'object') {
    let newJson = {};
    let jsonKeys = Object.keys(json);
    jsonKeys.forEach((jsonKey) => {
      let a = json_traverse(json[jsonKey], jsonKey);
      if (Array.isArray(a)) {
        let newResponse = {};
        for (let jsonItem of a) {
          newResponse = { ...newResponse, ...jsonItem };
        }
        a = newResponse;
      }
      newJson = { ...newJson, ...a };
    });
    return newJson;
  } else {
    return json;
  }
  json_traverse(json);
};
function json_traverse(o, prevKey) {
  var type = typeof o;
  if (type == 'object' && !Array.isArray(o)) {
    let results = [];
    for (let key in o) {
      let response;
      if (prevKey) {
        response = json_traverse(o[key], `${prevKey}_${key}`);
      } else {
        response = json_traverse(o[key], key);
      }
      if (Array.isArray(response)) {
        let newResponse = {};
        for (let jsonItem of response) {
          newResponse = { ...newResponse, ...jsonItem };
        }
        response = newResponse;
      }
      results.push(response);
    }
    return results;
  } else {
    let returnObject = {};
    returnObject[prevKey] = o.replace(/{(.*?)}/g, '');
    return returnObject;
  }
}
export const getAllFNSLanguages = async (objetiveLanguages) => {
  let languages = await import('date-fns/locale');
  return { ...languages };
};

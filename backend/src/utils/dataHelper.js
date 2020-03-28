/**
 * Parses sheet rows into associative arrays
 * @param {array} headers 
 * @param {array} rows 
 */
export function transposeSheetRows(headers, rows) {
  return rows.map((row) => {
    var obj = {};
    for (var i = 0; i < headers.length; i++) {
      obj[headers[i]] = row[i];
    }
    return obj;
  });
}

/**
 * Parses sheet columns into associative arrays
 * Example:
 * 
 * [ 
 *   [ 'The act of killing coronavirus' ],
 *   [ 'https://www.google.com' ],
 *   [ 'State of Emergency' ],
 *   [ '1 March 2020' ] 
 * ]
 * 
 * Into
 * 
 * { 
 *   name: 'The act of killing coronavirus',
 *   url: 'https://www.google.com',
 *   title: 'State of Emergency',
 *   date: '1 March 2020'
 * }
 * @param {array} headers 
 * @param {array} columns
 * @param {boolean?} isFirstColumnOnly
 */
export function transposeSheetColumns(headers, columns, isFirstColumnOnly = false) {
  var obj = {};
  for (var i = 0; i < headers.length; i++) {
    if (columns[i])
      obj[headers[i]] = isFirstColumnOnly ? columns[i][0] : columns[i];
  }
  return obj;
}
import { MEASURE, TRAVEL, UPDATE_STATUS, COUNTRY_STATUS } from '../../../shared/types';
import invert from 'lodash/invert';
import moment from 'moment-timezone';

const MEASURE_AS_KEY = invert(MEASURE);
const TRAVEL_AS_KEY = invert(TRAVEL);
const COUNTRY_STATUS_AS_KEY = invert(COUNTRY_STATUS);

export function toMeasureType(value) {
  return MEASURE_AS_KEY[value] ? value : null;
}

export function toTravelType(value) {
  return TRAVEL_AS_KEY[value] ? value : null;
}

export function toCountryStatus(value) {
  return COUNTRY_STATUS_AS_KEY[value] ? value: null;
}

export function toInteger(value) {
  const int = parseInt(value);
  return Number.isInteger(int) ? int : null;
}

/**
 * Date check for entry. ex valid: '1 April 2020'
 * @param {string} value 
 */
export function toEntryDate(value) {
  const d = moment(value, 'D MMMM Y');
  return d.isValid() ? d.format('D MMMM Y') : null;
}

export function isUpdateReady(value) {
  return value === UPDATE_STATUS.READY;
}

import { MEASURE, TRAVEL, UPDATE_STATUS, COUNTRY_STATUS, DATA_ENTRY_STATUS } from '../../../shared/types';
import moment from 'moment-timezone';

const OPTION_MEASURE = {
  'Yes': MEASURE.YES,
  'No': MEASURE.NO,
  'Partially': MEASURE.PARTIAL,
  'Unclear': MEASURE.UNCLEAR,
}

const OPTION_TRAVEL = {
  'Yes': TRAVEL.YES,
  'No': TRAVEL.NO,
  'Partially': TRAVEL.PARTIALLY,
  'Unclear': TRAVEL.UNCLEAR,
  'N/A': TRAVEL.NA,
}

const OPTION_COUNTRY_STATUS = {
  'Unclear': COUNTRY_STATUS.UNCLEAR,
  'N/A': COUNTRY_STATUS.NA,
  'State of Calamity': COUNTRY_STATUS.STATE_OF_CALAMITY,
  'State of Emergency': COUNTRY_STATUS.STATE_OF_EMERGENCY,
  'State of Alert': COUNTRY_STATUS.STATE_OF_ALERT,
  'Other (Yes)': COUNTRY_STATUS.OTHER_YES,
  'Other (No)': COUNTRY_STATUS.OTHER_NO,
  'State of Natural Disaster': COUNTRY_STATUS.STATE_OF_NATURAL_DISASTER,
  'State of National Disaster': COUNTRY_STATUS.STATE_OF_NATIONAL_DISASTER,
}

const OPTION_DATA_ENTRY_STATUS = {
  'Demo': DATA_ENTRY_STATUS.DEMO,
  'Flagged': DATA_ENTRY_STATUS.FLAGGED,
  'Ready': DATA_ENTRY_STATUS.READY,
  'Standby': DATA_ENTRY_STATUS.STANDBY,
}

export function toMeasureType(value) {
  return OPTION_MEASURE[value] ?? null;
}

export function toTravelType(value) {
  return OPTION_TRAVEL[value] ?? null;
}

export function toCountryStatus(value) {
  return OPTION_COUNTRY_STATUS[value] ?? null;
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
  return d.isValid() ? d : null;
}

export function isEntryActive(value) {
  const status = OPTION_DATA_ENTRY_STATUS[value];
  return status === DATA_ENTRY_STATUS.READY || status === DATA_ENTRY_STATUS.FLAGGED;
}

export function isUpdateReady(value) {
  return value === UPDATE_STATUS.READY;
}

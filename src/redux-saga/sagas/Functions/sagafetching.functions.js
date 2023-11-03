import {put,} from 'redux-saga/effects';
import axios from 'axios';
import {
  setValidation,
  setmxrecords,
  setsiteinfo,
} from '../../../redux/EmailValidation/validation';

export function* runvalidation(payload) {
  const url = 'https://validate24x7.com/api/validateEmail';
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = yield axios.post(url, { email: payload.data }, { headers });
    yield put(setValidation(response.data));
  } catch (error) {}
}

export function* runmxlookup(payload) {
  const url = 'https://validate24x7.com/api/mxrecord';
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = yield axios.post(url, { domain: payload.data }, { headers });
    yield put(setmxrecords(response.data));
  } catch (error) {}
}

export function* runserverinfoscan(payload) {
  const url = 'https://validate24x7.com/api/domainipcheck';
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = yield axios.post(url, { domain: payload.data }, { headers });
    yield put(setsiteinfo(response.data));
  } catch (error) {}
}



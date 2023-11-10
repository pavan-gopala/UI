import {put,} from 'redux-saga/effects';
import axios from 'axios';
import {
  setValidation,
  setmxrecords,
  setregister,
  setsiteinfo,
} from '../../../redux/EmailValidation/validation';
const headers = {
  'Content-Type': 'application/json',
};

export function* runvalidation(payload) {
  const url = 'https://validate24x7.com/api/validateEmail';
  try {
    const response = yield axios.post(url, { email: payload.data }, { headers });
    yield put(setValidation(response.data));
  } catch (error) {}
}

export function* runmxlookup(payload) {
  const url = 'https://validate24x7.com/api/mxrecord';
  try {
    const response = yield axios.post(url, { domain: payload.data }, { headers });
    yield put(setmxrecords(response.data));
  } catch (error) {}
}

export function* runserverinfoscan(payload) {
  const url = 'https://validate24x7.com/api/domainipcheck';
  try {
    const response = yield axios.post(url, { domain: payload.data }, { headers });
    yield put(setsiteinfo(response.data));
  } catch (error) {
    
  }
}

export function* runregister(payload) {
  const url = 'https://www.validate24x7.com/user/register';
 
  try { 
     const response = yield axios.post(url, payload, { headers, withCredentials: true });
     yield put(setregister(response.data));
  } catch (error) {}
}

export function* runlogin(payload) {
  const url = 'https://www.validate24x7.com/user/login';
 
  try {
  
    const response = yield axios.post(url, payload, { headers,withCredentials: true });
    yield put(setregister(response.data));
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      yield put(setregister(error.response.data));
    } else {
      // Something happened in setting up the request that triggered an Error
      yield put(setregister(error.message));
    }
  }
}




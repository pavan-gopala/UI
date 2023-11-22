import {put,} from 'redux-saga/effects';
import axios from 'axios';
import {
  setValidation,
  setregister,
} from '../../../redux/EmailValidation/validation';
const Url = `https://www.validate24x7.com`;
const headers = {
  'Content-Type': 'application/json',
};

export function* runvalidation(payload) {
  const {values,type} = payload;
  const url = `${Url}/api/${type}`;
  try {
    const response = yield axios.post(url, values, { headers });
    yield put(setValidation(response.data));
  } catch (error) {}
}


export function* runregister(payload) {
  const url = `${Url}/user/register`;
 
  try { 
     const response = yield axios.post(url, payload, { headers, withCredentials: true });
     yield put(setregister(response.data));
  } catch (error) {}
}

export function* runlogin(payload) {
  const url = `${Url}/user/login`;
  try {
  
    const response = yield axios.post(url, payload, { headers,withCredentials: true });
    yield put(setregister(response.data));
  } catch (error) {
    if (error.response) {
      yield put(setregister(error.response.data));
    } else {
      yield put(setregister(error.message));
    }
  }
}




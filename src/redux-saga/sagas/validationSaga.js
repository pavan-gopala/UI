import {put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  setLoading,
  setValidation,
  setmxrecords,
  setshowvalidation,
  setsiteinfo,
} from '../../redux/EmailValidation/validation';

function* runvalidation(payload) {
  const url = 'https://validate24x7.com/api/validateEmail';
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = yield axios.post(url, { email: payload.data }, { headers });
    yield put(setValidation(response.data));
  } catch (error) {}
}

function* runmxlookup(payload) {
  const url = 'https://validate24x7.com/api/mxrecord';
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = yield axios.post(url, { domain: payload.data }, { headers });
    yield put(setmxrecords(response.data));
  } catch (error) {}
}

function* runserverinfoscan(payload) {
  const url = 'https://validate24x7.com/api/domainipcheck';
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = yield axios.post(url, { domain: payload.data }, { headers });
    yield put(setsiteinfo(response.data));
  } catch (error) {}
}

export function* validationSaga() {
  yield takeLatest('mailvalidation/setEmail', function* (action) {
    const payload = action.payload;
    yield put(setLoading(true));
    yield put(setshowvalidation(false));
    if (payload.type === 'mxrecord') {
      yield runmxlookup(payload);
    } else if (payload.type === 'email') {
      yield runvalidation(payload);
    } else if (payload.type === 'siteinfo') {
      yield runserverinfoscan(payload);
    }

    yield put(setLoading(false));
    yield put(setshowvalidation(true));
  });
}

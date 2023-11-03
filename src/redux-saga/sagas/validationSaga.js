import {put, takeLatest } from 'redux-saga/effects';
import {
  setLoading,
  setshowvalidation,
} from '../../redux/EmailValidation/validation';
import { runmxlookup, runserverinfoscan, runvalidation } from './Functions/sagafetching.functions';

 

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

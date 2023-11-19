import {put, takeLatest } from 'redux-saga/effects';
import {
  setLoading,
  setshowvalidation,
} from '../../redux/EmailValidation/validation';
import { runmxlookup, runserverinfoscan, runvalidation,runregister,runlogin } from './Functions/sagafetching.functions';

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
    } else if(payload.type === 'register'){
      const {values} = payload;
      yield runregister(values);
    }else if(payload.type === 'login'){
      const {values} = payload;
      yield runlogin(values);
    }else if(payload.type === 'portcheck'){
      yield runvalidation(payload);
    }
    yield put(setLoading(false));
    yield put(setshowvalidation(true));
  });
}

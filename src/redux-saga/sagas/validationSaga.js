import {put, takeLatest } from 'redux-saga/effects';
import {
  setLoading,
  setshowvalidation,
} from '../../redux/EmailValidation/validation';
import {runvalidation,runregister,runlogin } from './Functions/sagafetching.functions';

export function* validationSaga() {
  yield takeLatest('mailvalidation/setEmail', function* (action) {
    const payload = action.payload;
    yield put(setLoading(true));
    yield put(setshowvalidation(false));
    if(payload.type === 'register'){
      yield runregister(payload.values);
    }else if(payload.type === 'login'){
      yield runlogin(payload.values);
    }else {
      yield runvalidation(payload);
    }
    yield put(setLoading(false));
    yield put(setshowvalidation(true));
  });
}

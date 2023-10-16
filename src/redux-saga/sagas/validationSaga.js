import {call, put, takeLatest,} from  'redux-saga/effects';
import { setLoading, setValidation, setshowvalidation } from '../../redux/EmailValidation/validation';

function * runvalidation(payload){
     const url = 'https://validate24x7.com/api/validateEmail';
     const headers = {
        'Content-Type': 'application/json',
      };
    
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({email:payload}),
      };
    
      try {
        const response = yield call(fetch, url, options);
        const result = yield response.json();
        yield put(setValidation(result))
      } catch (error) {
        console.error(error);
      }
}

export function * validationSaga (){
    yield takeLatest('mailvalidation/setEmail', function *(action){
         const payload =action.payload;
         yield put(setLoading(true));
         yield put(setshowvalidation(false));
         yield runvalidation(payload);
         yield put(setLoading(false));
         yield put(setshowvalidation(true));
    })
}

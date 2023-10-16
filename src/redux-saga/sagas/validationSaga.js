import {call, put, takeEvery, takeLatest} from  'redux-saga/effects';
import { setValidation } from '../../redux/EmailValidation/validation';

function * runvalidation(payload){
     const url = 'https://validate24x7.com/api/validateEmail';
     const headers = {
        'Content-Type': 'application/json',
      };
    
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      };
    
      try {
        const response = yield call(fetch, url, options);
        const result = yield response.json();
        console.log(result.data)
        yield put(setValidation(result.data))
    
        // You can dispatch an action with the result here, e.g., yield put(getNewsSuccess(result));
      } catch (error) {
        console.error(error);
    
        // Handle the error, e.g., yield put(getNewsFailure(error.message));
      }
}

export function * validationSaga (){
    yield takeLatest('mailvalidation/setEmail', function *(action){
         const payload = action.payload;
         yield runvalidation(payload);
    })
}

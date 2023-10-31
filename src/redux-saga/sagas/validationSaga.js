import {call, put, takeLatest,} from  'redux-saga/effects';
import { setLoading, setValidation, setmxrecords, setshowvalidation,setsiteinfo } from '../../redux/EmailValidation/validation';

function * runvalidation(payload){
     const url = 'https://validate24x7.com/api/validateEmail';
     const headers = {
        'Content-Type': 'application/json',
      };
    
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({email:payload.data}),
      };
    
      try {
        const response = yield call(fetch, url, options);
        const result = yield response.json();
        yield put(setValidation(result))
      } catch (error) {
        
      }
}
function * runmxlookup(payload){
  const url = 'http://localhost:4000/api/mxrecord';
  const headers = {
     'Content-Type': 'application/json',
   };
 
   const options = {
     method: 'POST',
     headers,
     body: JSON.stringify({domain:payload.data}),
   };
 
   try {
     const response = yield call(fetch, url, options);
     const result = yield response.json();
     yield put(setmxrecords(result))
    
   } catch (error) {
     
   }
}

function * runserverinfoscan(payload){
  const url = 'https://validate24x7.com/api/domainipcheck';
  const headers = {
     'Content-Type': 'application/json',
   };
 
   const options = {
     method: 'POST',
     headers,
     body: JSON.stringify({domain:payload.data}),
   };
 
   try {
     const response = yield call(fetch, url, options);
     const result = yield response.json();
     yield put(setsiteinfo(result))
    
   } catch (error) {
     
   }
}

export function * validationSaga (){
    yield takeLatest('mailvalidation/setEmail', function *(action){
         const payload =action.payload;
         yield put(setLoading(true));
         yield put(setshowvalidation(false));
         if(payload.type === 'mxrecord'){
          yield runmxlookup(payload);
         }else if(payload.type === 'email'){
          yield runvalidation(payload)
         }else if (payload.type === 'siteinfo'){
          yield runserverinfoscan(payload)
         }
         
         yield put(setLoading(false));
         yield put(setshowvalidation(true));
    })
}

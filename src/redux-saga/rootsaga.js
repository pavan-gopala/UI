import {all} from 'redux-saga/effects';
import { validationSaga } from "../redux-saga/sagas/validationSaga";


export  function * rootSaga(){
    yield all([
      validationSaga(),
    ]);
}


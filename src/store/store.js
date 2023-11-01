import { configureStore } from "@reduxjs/toolkit";
import mailValidationReducer from '../redux/EmailValidation/validation'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../redux-saga/rootsaga";




const saga = createSagaMiddleware();
const store = configureStore({
    reducer:{
        mailvalidation:mailValidationReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(saga),
    devTools: process.env.NODE_ENV !== 'production',
});

saga.run(rootSaga);

export default store;
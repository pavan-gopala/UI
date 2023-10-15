import { configureStore } from "@reduxjs/toolkit";
import mailValidationReducer from '../redux/EmailValidation/validation'

const store = configureStore({
    reducer:{
        mailvalidation:mailValidationReducer,
    },
});

export default store;
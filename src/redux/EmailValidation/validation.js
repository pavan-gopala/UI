import { createSlice } from "@reduxjs/toolkit";

const mailvalidationslice = createSlice({
    name:'mailvalidation',
    initialState:{validationResult:'', isValid:false,isLoading:false,email:'',showvalidation:false,},
    reducers:{
        setValidation:(state,action)=>{
           state.validationResult = action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        setisValid:(state, action)=>{
            state.isValid = action.payload
        },
        setEmail:(state,action)=>{
            state.email = action.payload
        },
        setshowvalidation:(state,action)=>{
            state.showvalidation = action.payload
        }
    }
});

export const {setValidation,setLoading,setisValid,setEmail,setshowvalidation} = mailvalidationslice.actions;
export default mailvalidationslice.reducer;
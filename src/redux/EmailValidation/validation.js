import { createSlice } from "@reduxjs/toolkit";


const mailvalidationslice = createSlice({
   
    name:'mailvalidation',
    initialState:{mxresult:'',validationResult:'', isinValid:false,isLoading:false,email:'',showvalidation:false,showTools:false,fetching:'',fetchstatus:false,siteinfo:''},
    reducers:{
        setValidation:(state,action)=>{
           state.validationResult = action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        setisValid:(state, action)=>{
            state.isinValid = action.payload
        },
        setEmail:(state,action)=>{
            state.email = action.payload
        },
        setshowvalidation:(state,action)=>{
            state.showvalidation = action.payload
        },
        setshowTools:(state,action)=>{
            state.showTools = action.payload
        },
        setmxrecords:(state,action)=>{
            state.mxresult = action.payload
        },
        setsiteinfo:(state,action)=>{
            state.siteinfo = action.payload
        },
    }
});

export const {setValidation,setLoading,setisValid,setEmail,setshowvalidation,setshowTools,setmxrecords,setsiteinfo,} = mailvalidationslice.actions;
export default mailvalidationslice.reducer;
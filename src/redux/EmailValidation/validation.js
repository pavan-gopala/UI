import { createSlice } from "@reduxjs/toolkit";


const mailvalidationslice = createSlice({
   
    name:'mailvalidation',
    initialState:{mxresult:'',validationResult:'', isinValid:false,isLoading:false,email:'',showvalidation:false,showTools:false,fetching:'',fetchstatus:false,siteinfo:'',register:'',login:false,showDialog:true,showregistration:false},
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
        setregister:(state,action)=>{
            state.register = action.payload
        },
        setlogin:(state,action)=>{
            state.login = action.payload
        },
        showDialog:(state,action)=>{
            state.showDialog = action.payload
        },
        showregistration:(state,action)=>{
            state.showregistration = action.payload
        }
    }
});

export const {setValidation,setLoading,setisValid,setEmail,setshowvalidation,setshowTools,setmxrecords,setsiteinfo,setregister,setlogin, showDialog,showregistration} = mailvalidationslice.actions;
export default mailvalidationslice.reducer;
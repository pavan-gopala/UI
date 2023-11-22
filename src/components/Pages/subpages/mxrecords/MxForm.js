import React, { useEffect, useState } from 'react'
import { Typography,TextField,Grid, FormHelperText, } from '@mui/material'
import { FormComponent,ButtonComponent,ClearButtonComponent } from '../../../../styles/styles'
import { handleinputChange } from '../../../Functions/form.functions'
import { useDispatch,useSelector } from 'react-redux';
import { fetchstatus, runFetching, setEmail, setValidation, setisValid} from '../../../../redux/EmailValidation/validation';
import '../../../../styles/styles.css';

export const MxForm = () => {
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isinvalid = useSelector((state)=>state.mailvalidation.isinValid)
  const fetching = useSelector((state)=>state.mailvalidation.fetching)
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const [disable, setdisable] = useState(true)
    const inputChange =async (e)=>{
         handleinputChange(e,setInput)
    }

    useEffect(()=>{
      if (!domainPattern.test(input)) {
        setdisable(true)
     }
     else(setdisable(false))
    },[input])


    const handleValidation = async(input)=>{
        const mxRecord = { type: 'mxrecord', values: {domain:input} };
        if(disable === false){
          dispatch(setisValid(false))
          dispatch(setEmail(mxRecord))
           setInput('');
          
        }else{
         dispatch((setisValid(disable)))
        }
    }

    

    const handleClearButton = ()=>{
           setInput('')
           dispatch((setisValid(false)))
    }
    const handleSubmit = (e)=>{
          e.preventDefault();
          handleValidation(input)
    }

    useEffect(()=>{
        dispatch(setisValid(false))
    },[])
    
  return (
    <FormComponent elevation={0} >
     <Typography fontSize={'small'} sx={{paddingBottom:1}}>
     <label>Input domain</label>
      </Typography> 
       <Grid container sx={{width:'100%'}}>
        <Grid item xs={12} sm={8} >
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:8}}>
        <TextField className='myTextField' error={isinvalid} onChange={inputChange} value={input} variant='outlined' placeholder='Enter domain' fullWidth/>
        
       </form>
        </Grid>
       <ButtonComponent onClick={()=>handleValidation(input)}>Lookup</ButtonComponent>
        <ClearButtonComponent onClick={handleClearButton} variant='outlined'>Clear</ClearButtonComponent>
        </Grid>

        {isinvalid&&<FormHelperText sx={{color:'red'}}>Invalid Domain</FormHelperText>}
       
    </FormComponent>
  )
}

import React, { useEffect, useState } from 'react'
import { Typography,TextField,Grid, FormHelperText, } from '@mui/material'
import { FormComponent,ButtonComponent,ClearButtonComponent } from '../../../styles/styles'
import { handleinputChange } from '../../Functions/form.functions'
import ResponseFetching from '../../EmailValidationForm';
import { useDispatch,useSelector } from 'react-redux';
import { setValidation , setEmail, setisValid,setLoading, setshowvalidation} from '../../../redux/EmailValidation/validation';


export const Formcomponent1 = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isvalid = useSelector((state)=>state.mailvalidation.isValid)
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const [disable, setdisable] = useState(true)
   
    const inputChange =async (e)=>{
         handleinputChange(e,setInput)
    }

    useEffect(()=>{
      if (!emailRegex.test(input)) {
        setdisable(true)
     }
     else(setdisable(false))
    },[input])

    // useEffect(()=>{
    //    setisValid(disable)
    // },[input])

    const handleValidation = async(input)=>{
        if(disable === false){
          dispatch(setisValid(false))
          dispatch(setEmail(input))
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

    
  return (
    <FormComponent elevation={4} >
     <Typography fontSize={'small'} sx={{paddingBottom:1}}>
     <label>Input email address</label>
      </Typography> 
       <Grid container sx={{width:'100%'}}>
        <Grid item xs={12} sm={8} >
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:8}}>
        <TextField error={isvalid} onChange={inputChange} value={input} variant='outlined' placeholder='Email address' fullWidth/>
        
       </form>
        </Grid>
       <ButtonComponent onClick={()=>handleValidation(input)}>Validate</ButtonComponent>
        <ClearButtonComponent onClick={handleClearButton} variant='outlined'>Clear</ClearButtonComponent>
        </Grid>

        {isvalid&&<FormHelperText sx={{color:'red'}}>Invalid email</FormHelperText>}
       
    </FormComponent>
  )
}

import React, { useEffect, useState } from 'react'
import { Typography,TextField,Grid, FormHelperText, } from '@mui/material'
import { FormComponent,ButtonComponent,ClearButtonComponent } from '../../../../styles/styles'
import { handleinputChange } from '../../../Functions/form.functions'
import { useDispatch,useSelector } from 'react-redux';
import { setEmail, setValidation, setisValid} from '../../../../redux/EmailValidation/validation';
import '../../../../styles/styles.css'

export const SiteInfoForm = () => {
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  const isinvalid = useSelector((state)=>state.mailvalidation.isinValid)
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const [disable, setdisable] = useState(true)
   
    const inputChange =async (e)=>{
         handleinputChange(e,setInput)
    }

    useEffect(()=>{
      if (!domainPattern.test(input) && !urlPattern.test(input)) {
        setdisable(true)
        
     }
     else(setdisable(false))
    },[input])


    const handleValidation = async(input)=>{
      let domain = input; 
        if(urlPattern.test(input) === true){
             domain = new URL(input).hostname;
        }
        
        const siteInfo = { type: 'domainipcheck', values: {domain:domain} };
        if(disable === false){
          dispatch(setisValid(false))
          dispatch(setEmail(siteInfo))
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
     <label>Input domain/url</label>
      </Typography> 
       <Grid container sx={{width:'100%'}}>
        <Grid item xs={12} sm={8} >
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:8}}>
        <TextField className='myTextField' error={isinvalid} onChange={inputChange} value={input} variant='outlined' placeholder='Enter domain/url' fullWidth/>
        
       </form>
        </Grid>
       <ButtonComponent onClick={()=>handleValidation(input)}>Scan</ButtonComponent>
        <ClearButtonComponent onClick={handleClearButton} variant='outlined'>Clear</ClearButtonComponent>
        </Grid>

        {isinvalid&&<FormHelperText sx={{color:'red'}}>Invalid Domain/Url</FormHelperText>}
       
    </FormComponent>
  )
}



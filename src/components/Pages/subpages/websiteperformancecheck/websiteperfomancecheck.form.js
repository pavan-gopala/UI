
import React, { useEffect, useState } from 'react'
import { Typography,TextField,Grid, } from '@mui/material'
import { FormComponent,ButtonComponent,ClearButtonComponent } from '../../../../styles/styles'
import { useDispatch } from 'react-redux';
import {  setEmail,} from '../../../../redux/EmailValidation/validation';
import '../../../../styles/styles.css';
import {Button} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const ipPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)$/
const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const validationSchema = Yup.object({
  url: Yup.string().required('url is required')
  .test('url', 'Invalid url', function(value) {
    return urlPattern.test(value) ;
  }), 
});


export const UrlValidationForm = () => {

  
  
 //   const netblockPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\/(0|[1-9]|1[0-9]|2[0-9]|3[0-2])$/
    const dispatch = useDispatch();
  
    const formik = useFormik({
      initialValues: {
        url: '',
      },
      validationSchema: validationSchema,
      
      onSubmit: async(values) => {
       dispatch(setEmail({values,type:'websitespeedcheck'})); // replace with your actual action
       formik.resetForm();
      },
    });
    

    const handleClearButton = () => {
      formik.resetForm(); // Reset Formik values to initial values
    };

    
  return (
    
       <Grid container sx={{width:'100%'}} marginTop={4} >
        <Grid item xs={12} sm={12}  sx={{margin:'auto'}}>
       
        <div class="newsletter-form">
          <div textAlign="center" style={{display:'flex' , flexDirection:'column', margin:'0px', padding:'0px'}}>
    <h2 >website performance check</h2>
   <p2 style={{padding: "10px", }}>Improve your site's speed and SEO with our free check!</p2>
</div>
   
    <form className="webpercheck" >
      <input value={formik.values.url}
              className='webpercheck'
              type='text'
              label='Url'
              name='url'
              variant='outlined'
              placeholder='Enter Url'
             onChange={formik.handleChange}
             error={formik.touched.url && Boolean(formik.errors.url)}
            />
            <Button variant='outlined' onClick={formik.handleSubmit}>Check</Button>
    </form>
    <div style={{textAlign:'left'}}>
    <label htmlFor='Url' style={{color:'red', fontSize:'small', fontWeight:'400',}}>{formik.touched.url && formik.errors.url}</label>
    </div>
    
  </div>
  
  </Grid>
        </Grid>
        
       

  )
}

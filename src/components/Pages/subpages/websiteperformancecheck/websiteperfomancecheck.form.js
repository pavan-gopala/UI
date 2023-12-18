
import React, { useEffect, useState } from 'react'
import { Typography,TextField,Grid, } from '@mui/material'
import { FormComponent,ButtonComponent,ClearButtonComponent } from '../../../../styles/styles'
import { useDispatch } from 'react-redux';
import {  setEmail,} from '../../../../redux/EmailValidation/validation';
import '../../../../styles/styles.css';
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
    <FormComponent elevation={0}  >
       <Grid container sx={{width:'100%'}} >
        <Grid item xs={12} sm={10}  sx={{margin:'auto'}}>
       
        <div class="newsletter-form">
    <p class="heading">website performance check</p>
    <form class="form">
      <TextField value={formik.values.url}
              label='Url'
              name='url'
              variant='filled'
              className='myTextField'
             onChange={formik.handleChange}
             error={formik.touched.url && Boolean(formik.errors.url)}
             helperText={formik.touched.url && formik.errors.url}  placeholder='Enter url' fullWidth/>
              <ButtonComponent   onClick={formik.handleSubmit} >Check</ButtonComponent>
    </form>
  </div>
  </Grid>
        </Grid>
        
       
    </FormComponent>
  )
}

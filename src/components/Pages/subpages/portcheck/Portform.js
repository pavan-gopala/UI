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
 
const validationSchema = Yup.object({
  domain: Yup.string().required('domain/ip is required')
  .test('domain', 'Invalid domain/ip address', function(value) {
    return domainPattern.test(value) || ipPattern.test(value);
  }),
  port: Yup.number()
  .typeError('Port must be a number')
  .required('Port is required'),  
});
export const PortForm = () => {
  
 //   const netblockPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)\/(0|[1-9]|1[0-9]|2[0-9]|3[0-2])$/
    const dispatch = useDispatch();
  
    const formik = useFormik({
      initialValues: {
        domain: '',
        port: '',
      },
      validationSchema: validationSchema,
      
      onSubmit: async(values) => {
       dispatch(setEmail({values,type:'portcheck'})); // replace with your actual action
       formik.resetForm();
      },
    });
    

    const handleClearButton = () => {
      formik.resetForm(); // Reset Formik values to initial values
    };
    
  return (
    <FormComponent elevation={0} >
     <Typography fontSize={'small'} sx={{paddingBottom:1}}>
      </Typography> 
       <Grid container sx={{width:'100%'}}>
        <Grid item xs={12} sm={10}  sx={{margin:'auto'}}>
        <form onSubmit={formik.handleSubmit} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:8}}>
        <TextField value={formik.values.domain}
              label='Domain/Ip address'
              name='domain'
              className='myTextField'
             onChange={(e)=>{formik.handleChange(e);}}
             error={formik.touched.domain && Boolean(formik.errors.domain)}
             helperText={formik.touched.domain && formik.errors.domain} variant='outlined' placeholder='Enter domain or Ip address' fullWidth/>
             
            <TextField name='port'
            style={{ marginRight: '4%', marginLeft:'4%' }}
            label='Port'
            className='myTextField'
             variant='outlined'
             placeholder='Enter Port'
             value={formik.values.port}
             onChange={(e)=>{formik.handleChange(e);}}
             error={formik.touched.port && Boolean(formik.errors.port)}
             helperText={formik.touched.port && formik.errors.port}
           />
       </form>
        </Grid>
        <Grid item xs={12} sm={2} sx={{justifyContent:'center',alignItems:'center',margin:'auto'}} >
        <ButtonComponent   onClick={formik.handleSubmit} >Check</ButtonComponent>
        <ClearButtonComponent onClick={handleClearButton} variant='outlined'>Clear</ClearButtonComponent>
        </Grid>
        </Grid>
       
    </FormComponent>
  )
}

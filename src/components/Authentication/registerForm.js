import { Stack,Button,Typography,TextField, Grid,Snackbar,Alert } from '@mui/material'
import '../../styles/styles.css';
import {React, useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { setEmail, setlogin, setregister } from '../../redux/EmailValidation/validation';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  email: Yup.string().required('Email is required')
  .matches(emailRegex, 'Invalid email address'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 8 characters'),
});
export const RegistrationForm = () => {
    const register = useSelector((state)=>state.mailvalidation.register)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [warn, setwarn] = useState(false);
    const [disable, setdisable] = useState(false);

   

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(values) => {
         setdisable(true)
         dispatch(setEmail({values,type:'register'})); // replace with your actual action
        },
      });
      useEffect(() => {
        if (register.message === 'User already exists') {
            setwarn(true);
            setdisable(false);
        } else if (register.message === 'User Registered') {
          formik.resetForm();
          setdisable(false);
          dispatch(setlogin(true))
          navigate('/');
        }
      }, [register]);
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setwarn(false);
            dispatch(setregister(''))
          return;
        }
        setwarn(false);
          dispatch(setregister(''))
        
        
      };

      const handleloginNav = ()=>{  
        dispatch(setregister(''))
        navigate('/login');
      }
    return (
   <>
        <Stack spacing={4}>
          <Typography  variant="h4">Registration Form</Typography>
          <form style={{textAlign:'left'}}  onSubmit={formik.handleSubmit}>
            <Stack spacing={0} >
            <p style={{fontFamily:'Peppins'}}>Name*</p>
            <TextField
            className='myTextField'
              variant="outlined"
              fullWidth
              id="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
           <p style={{fontFamily:'Peppins'}}>Email*</p>
    <TextField
    className='myTextField'
    variant="outlined"
    fullWidth
    id="email"
    name="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
  />
    <p style={{fontFamily:'Peppins'}}>Password*</p>
  <TextField
  className='myTextField'
    variant="outlined"
    fullWidth
    id="Password"
    name="password"
    value={formik.values.password}
    onChange={formik.handleChange}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={
        formik.touched.password 
          ? formik.errors.password
            : "If you lost your password, you can't access your account"
      }/>
  <Button  disabled={disable} sx={{width:'100%', marginTop:2}} variant="contained" color="primary" type="submit">Registser</Button>
  </Stack>
</form>
</Stack>
<Snackbar open={warn} autoHideDuration={11000} onClose={handleClose} > 
        <Alert onClose={handleClose} variant='filled' severity="warning" sx={{ width: '100%', }}>
            Email already registered! click here to  <Button onClick={handleloginNav} sx={{bgcolor:'white'}}>Login</Button>
        </Alert>
      </Snackbar>
           </>
  )
}
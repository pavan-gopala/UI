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
  email: Yup.string().required('Email is required')
  .matches(emailRegex, 'Invalid email address'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});
export const LoginForm = () => {
    const register = useSelector((state)=>state.mailvalidation.register)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [warn, setwarn] = useState(false);
    const [disable, setdisable] = useState(false);
    const [valid, setvalid] = useState(false);

    const handleInputChange = () => {
      setvalid(false);
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        
        onSubmit: async(values) => {
         setdisable(true)
         setvalid(false)
         dispatch(setEmail({values,type:'login'})); // replace with your actual action
        },
      });
      useEffect(() => {
        if (register.message === 'Email not registered') {
            setwarn(true);
            setdisable(false);
            
        } else if (register.message === 'login successful') {
          formik.resetForm();
          setdisable(false);
          dispatch(setlogin(true))
          navigate('/');
        } else if(register.message === 'Incorrect password'){
            setdisable(false);
            setvalid(true)
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
        navigate('/register');
      }
    return (
   <>
        <Stack spacing={4}>
          <Typography  variant="h4">Login Form</Typography>
          <form style={{textAlign:'left'}}  onSubmit={formik.handleSubmit}>
            <Stack spacing={0} >
           <p style={{fontFamily:'Peppins'}}>Email*</p>
    <TextField
    className='myTextField'
    variant="outlined"
    fullWidth
    id="email"
    name="email"
    value={formik.values.email}
    onChange={(e)=>{formik.handleChange(e); handleInputChange()}}
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
    onChange={(e)=>{formik.handleChange(e); handleInputChange()}}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={
        formik.touched.password 
          && formik.errors.password
      }/>
      {valid && <p style={{color:'red', fontFamily:'Peppins', fontSize:'small',}}>Incorrect password</p>}
  <Button  disabled={disable} sx={{width:'100%', marginTop:2}} variant="contained" color="primary" type="submit">Login</Button>
  </Stack>
</form>
</Stack>
<Snackbar open={warn} autoHideDuration={11000} onClose={handleClose} > 
        <Alert onClose={handleClose} variant='filled' severity="warning" sx={{ width: '100%', }}>
            Email is not registered! click here to  <Button onClick={handleloginNav} sx={{bgcolor:'white'}}>Register</Button>
        </Alert>
      </Snackbar>
           </>
  )
}
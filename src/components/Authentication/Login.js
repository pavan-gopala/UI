import React from 'react'
import loginImage from  '../../Images/loginimage.jpg'
import { Grid } from '@mui/material'
import '../../styles/styles.css'
import { RegistrationForm } from './registerForm'

export const Login = () => {
  return (
      <Grid container sx={{justifyContent:'center',alignItems:'center' }}>
           <Grid item sm={6}>
                <img src={loginImage} alt="register"  className='registerimage'/>
           </Grid>  
           <Grid item sm={5} marginTop={'5vh'} marginBottom={'3vh'}>
             <RegistrationForm/>
           </Grid>
        </Grid>
  )
}

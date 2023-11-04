import React from 'react'
import registerImage from  '../../Images/signup.jpg'
import { Grid } from '@mui/material'
import '../../styles/styles.css'
import { RegistrationForm } from './registerForm'

export const Register = () => {
  return (
      <Grid container sx={{justifyContent:'center', }}>
           <Grid item sm={6}>
                <img src={registerImage} alt="register"  className='registerimage'/>
           </Grid>  
           <Grid item sm={5} marginTop={'5vh'} marginBottom={'3vh'}>
             <RegistrationForm/>
           </Grid>
        </Grid>
  )
}

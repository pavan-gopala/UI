import React from 'react'
import registerImage from  '../../Images/Register-login.jpg'
import { Grid } from '@mui/material'
import '../../styles/styles.css'
import { RegistrationForm } from './registerForm'

export const Register = () => {
  return (
      <Grid container sx={{justifyContent:'center', alignItems:'center', margin:'auto' }}>
            
           <Grid item xs={10} md={4} marginTop={'15vh'} marginBottom={'3vh'}>
             <RegistrationForm/>
           </Grid>
        </Grid>
  )
}

import React from 'react'
import loginImage from  '../../Images/loginimage.jpg'
import { Grid } from '@mui/material'
import '../../styles/styles.css'
import { LoginForm } from './LoginForm'

export const Login = () => {
  return (
      <Grid container sx={{justifyContent:'center',alignItems:'center', margin:'auto' }}>
           
           <Grid item xs={10} md={4} marginTop={'15vh'} marginBottom={'3vh'} padding={0}>
             <LoginForm/>
           </Grid>
        </Grid>
  )
}

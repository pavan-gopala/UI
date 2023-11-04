import React from 'react'
import registerImage from  '../../Images/signup.jpg'
import { Grid } from '@mui/material'

export const Register = () => {
  return (
      <Grid container>
           <Grid item sm={6}>
                <img src={registerImage} alt="register" />
           </Grid>  
           <Grid item sm={6}>
            <form>
                <h2>Register</h2>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter your username" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" />
                <p>!important: if you forgot password.you can't access your account</p>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" placeholder="Confirm your password" />
                <button type="submit">Register</button>
            </form>
           </Grid>
        </Grid>
  )
}

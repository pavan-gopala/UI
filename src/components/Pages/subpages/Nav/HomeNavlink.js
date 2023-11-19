import React from 'react'
import { Button,Box, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Home, Logout } from '@mui/icons-material'
import { LogoutSharp } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setlogin, setregister } from '../../../../redux/EmailValidation/validation';
import '../../../../styles/styles.css';
import { Login } from '@mui/icons-material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const HomeNavlink = () => {
  return (
                <a href='/'  style={{textDecoration:'none'}}><span style={{fontSize:'x-large'}}>🏠</span></a>   
    )
}
export const Registerlink = ({handleclose}) => {
  return (
          <a href='/register' className='navauth' style={{textDecoration:'none',textAlign:'center'}}><button className='navbutton'>Register</button></a>
  )
}

export const Loginlink = ({handleclose}) => {
  return (
           <a href='/login' className='navauth' style={{textDecoration:'none'}}><Box display={'flex' } sx={{justifyContent:'center', alignItems:'center'}}><h4>Login</h4><Login/></Box></a>
  )
}

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const handlelogout = () => {
    if (document.cookie.includes('jwt')) {
      dispatch(setlogin(false));
      dispatch(setregister(''));
    } else {
      dispatch(setlogin(true));
      
    }
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
   
  }
  return (
          
    <a href='/' className='navauth' style={{textDecoration:'none',}}><Box display={'flex' } sx={{justifyContent:'center', alignItems:'center'}}><h4>Logout</h4><Logout/></Box></a>
      
  )
}

export const PaddingButton = () => {
  return (
           <Box sx={{margin:'auto', paddingRight:2.5 }}>
          </Box>
  )
}


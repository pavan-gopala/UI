import React from 'react'
import { Button,Box, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import { LogoutSharp } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setlogin, setregister } from '../../../../redux/EmailValidation/validation'

export const HomeNavlink = ({handleclose}) => {
  return (
           <Box sx={{ display:'inline',backgroundColor:'background.default',borderRadius:0,margin:0, padding:0}}  component={NavLink} to={'/'} onClick={handleclose}>{({isActive})=>(<IconButton sx={{margin:1,padding:1,'&:hover': {
            backgroundColor: 'primary.main', // Change background color on hover
          }, backgroundColor: isActive ? 'primary.main' : 'background.default', color:isActive?'white':'primary.main'}}><Home/></IconButton>)}</Box>
  )
}
export const Registerlink = ({handleclose}) => {
  return (
           <Box component={NavLink} to={'/register'} onClick={handleclose}>{({ isActive }) => (
            <Button variant='contained' sx={{margin:1,borderRadius:0,width:'120px', backgroundColor: isActive ? 'primary.main' : 'white', color:isActive?'white':'secondary.main'}}>
              Register
            </Button>
          )}</Box>
  )
}

export const Loginlink = ({handleclose}) => {
  return (
           <Box sx={{marginRight:'2vw'}} component={NavLink} to={'/login'} onClick={handleclose}>{({ isActive }) => (
            <Button variant='contained' sx={{margin:1, borderRadius:0,width:'120px', backgroundColor: isActive ? 'primary.main' : 'white', color:isActive?'white':'secondary.main'}}>
               Login
            </Button>
          )}</Box>
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
           <Box sx={{margin:'auto', paddingRight:0}}  onClick={handlelogout}>
            <IconButton variant='contained' sx={{margin:1,  color:'white', bgcolor:'primary.main'}}>
                <LogoutSharp/>
            </IconButton>
          </Box>
  )
}

export const PaddingButton = () => {
  return (
           <Box sx={{margin:'auto', paddingRight:2.5 }}>
          </Box>
  )
}


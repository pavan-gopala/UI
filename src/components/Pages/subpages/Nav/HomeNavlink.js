import React from 'react'
import { Button,Box, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Home } from '@mui/icons-material'

export const HomeNavlink = ({handleclose}) => {
  return (
           <Box sx={{margin:'auto',backgroundColor:'white',borderRadius:50,}}  component={NavLink} to={'/'} onClick={handleclose}>{({isActive})=>(<IconButton sx={{margin:0,padding:1, backgroundColor: isActive ? 'primary.main' : 'white', color:isActive?'white':'primary.main'}}><Home/></IconButton>)}</Box>
  )
}
export const Registerlink = ({handleclose}) => {
  return (
   
           <Box sx={{margin:'auto', paddingRight:1}} component={NavLink} to={'/register'} onClick={handleclose}>{({ isActive }) => (
            <Button variant='contained' sx={{margin:1, backgroundColor: isActive ? 'primary.main' : 'white', color:isActive?'white':'secondary.main'}}>
              Register
            </Button>
          )}</Box>

  )
}


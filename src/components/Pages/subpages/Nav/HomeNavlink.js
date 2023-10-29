import React from 'react'
import { Button,Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const HomeNavlink = () => {
  return (
    <Box sx={{margin:'auto'}}>
           <NavLink to={'/'}><Button variant='contained' sx={{marginLeft:2}}>Home</Button></NavLink>
    </Box>
   
  )
}

import React from 'react'
import { Button,Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const HomeNavlink = ({handleclose}) => {
  return (
    <Box sx={{margin:'auto'}} >
           <NavLink to={'/'} onClick={handleclose}><Button variant='contained' sx={{marginLeft:2}}>Home</Button></NavLink>
    </Box>
   
  )
}

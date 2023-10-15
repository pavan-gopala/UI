import React from 'react'
import { useTheme } from '@mui/material'
import { Navbar } from './Pages/MainPages/Navbar'
import { Description } from './Pages/MainPages/Description'
import { Aboutus } from './Pages/MainPages/Aboutus'

export const Homepage = () => {
  return (
    <div style={{width:'100%'}}><Navbar/>
    <Description/>
    
    </div>
  )
}

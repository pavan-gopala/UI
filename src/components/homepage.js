import React from 'react'
import { Navbar } from './Pages/MainPages/Navbar'
import { Description } from './Pages/MainPages/Description'


export const Homepage = () => {

  return (
    <div style={{width:'100%'}}><Navbar/>
    <Description/>
    
    </div>
  )
}

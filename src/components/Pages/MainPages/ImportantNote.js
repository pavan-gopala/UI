import React from 'react'
import { Box } from '@mui/material'
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt'

export const ImportantNote = () => {
  return (
    <Box style={{backgroundColor: "rgb(231,240,246)", padding:'0px', margin:'0px', display:'flex',justifyContent:'center'}}>
  <h4>More Tools will be available soon</h4>
  <a href={!document.cookie.includes('jwt') ? '/register' : ''} style={{textDecoration:'none',display:'flex', flexDirection:'row', color:'#00658E',padding:'0px', margin:'0px'}}>
    <p style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:4}}>
      {!document.cookie.includes('jwt') ? "Register now" : "Keep checking"} 
      <ArrowRightAlt/>
    </p>
  </a>
 </Box>
  )
}

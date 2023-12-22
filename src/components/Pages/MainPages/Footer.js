import React from 'react'
import { FooterComponent } from '../../../styles/styles'
import { IconButton, Typography,Grid, useTheme,Box } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
  const theme = useTheme();
  const scolor = theme.palette.primary.main;
  
  return (
    <Grid container style={{justifyContent:'center', alignItems:'center'}}>
      <Grid item xs={12} md={2} >
         <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
         <p>Contact</p> 
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
         </Box>
      </Grid>
      <Grid item xs={12} md={12} >
      <Typography><IconButton sx={{color:'white'}}><CopyrightIcon/></IconButton>Copyright 2023  <span style={{color:"#00684A", backgroundColor:'white', padding:4, fontWeight:1000}}>validate24x7</span> • All rights reserved</Typography>
    
      </Grid>
    </Grid>
    
  )
}

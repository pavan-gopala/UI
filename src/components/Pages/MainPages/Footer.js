import React from 'react'
import { FooterComponent } from '../../../styles/styles'
import { IconButton, Typography,Grid, useTheme,Box } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../../../styles/footerstyles.css'

export const Footer = () => {
  const theme = useTheme();
  const scolor = theme.palette.primary.main;
  
  return (
    // <Grid container style={{justifyContent:'center', alignItems:'center'}}>
    //   <Grid item xs={12} md={2} >
    //      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
    //      <p>Contact</p> 
    //     <p>Privacy Policy</p>
    //     <p>Terms of Use</p>
    //      </Box>
    //   </Grid>
    //   <Grid item xs={12} md={12} >
    //   <Typography><IconButton sx={{color:'white'}}><CopyrightIcon/></IconButton>Copyright 2023  <span style={{color:"rgb(255, 127, 80)", backgroundColor:'white', padding:4, fontWeight:1000}}>validate24x7</span> • All rights reserved</Typography>
    
    //   </Grid>
    // </Grid>

    <footer class="pt-5 snipcss-faZKt">
  <div class="container-fluid style-12oHw" id="style-12oHw">
    <div class="row text-center">
      <div class="col">
        <span class="text-accent text-small text-uppercase">
          Website Performance Check is a service provided by
        </span>
      </div>
    </div>
    <div class="row">
      <div class="text-center pb-2 col">
        <h5>A GROUP OF ENTREPRENEURS</h5>
      </div>
    </div>
    <div class="row text-center pt-3">
      <div class="col">
        <a href="" target="_blank" class="text-accent text-small mr-3">
          Contact
        </a>
        <a href="" target="_blank" class="text-accent text-small mr-3">
          Privacy Policy
        </a>
        <a href="" target="_blank" class="text-accent text-small mr-3">
          Terms of Use
        </a>
        <a href="" target="_blank" class="text-accent text-small">
          Imprint
        </a>
      </div>
    </div>
  </div>
</footer>
    
  )
}

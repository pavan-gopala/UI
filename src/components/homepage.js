import { Grid, Hidden, IconButton } from '@mui/material'
import React from 'react'
import '../styles/styles.css'
import shieldimage from '../Images/shield_check.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export const Homepage = () => {

  return (
    <Grid container className='HomepageContainer'>
      <Grid item xs={12} sm={6} className='GridHome' >
            <h4> AI-powered data validation tools that are easy to use <span className='homepagespan'>free</span> and <span className='homepagespan'>affordable</span> provide real-time results. </h4>
          <Hidden mdDown={true}>
          <p>Our AI-powered data validation tools can help you improve the accuracy and reliability of your data, which can lead to better decision-making, increased efficiency, and reduced risk.

         Our tools are easy to use and deploy, even for users with no prior experience with AI. They are also affordable for businesses of all sizes, and they offer a variety of features that can help you improve the quality of your data.

         Our tools provide real-time results so that you can quickly identify and fix any errors. They are also highly accurate and able to identify even the most subtle errors in your data.

         If you are looking for an easy-to-use, affordable, and accurate AI-powered data validation tool, then you should consider our tools.</p>
         <span className='homepagespan1'>check tools in menu <IconButton sx={{color:'black'}}><ArrowRightAltIcon/></IconButton></span>
          </Hidden>
           </Grid>

      <Grid item xs={10} sm={6} className='GridImage' sx={{justifyContent:'center', alignItems:'center', margin:'auto'}} >
      <div className="shield-container">
          <img src={shieldimage} alt="Shield Check" className="shield-image" />
          
        </div></Grid>
         <Hidden mdUp={true}> <Grid item xs={10} sm={6} sx={{margin:'auto'}} className='GridHome'>
          <p>Our AI-powered data validation tools can help you improve the accuracy and reliability of your data, which can lead to better decision-making, increased efficiency, and reduced risk.

        Our tools are easy to use and deploy, even for users with no prior experience with AI. They are also affordable for businesses of all sizes, and they offer a variety of features that can help you improve the quality of your data.

        Our tools provide real-time results so that you can quickly identify and fix any errors. They are also highly accurate and able to identify even the most subtle errors in your data.

        If you are looking for an easy-to-use, affordable, and accurate AI-powered data validation tool, then you should consider our tools.</p>
        <span className='homepagespan1'>check tools in menu <IconButton sx={{color:'black'}}><ArrowRightAltIcon/></IconButton></span>
          </Grid></Hidden>
    </Grid>
 
  )
}

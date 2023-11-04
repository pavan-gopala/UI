import React from 'react'
import { FooterComponent } from '../../../styles/styles'
import { IconButton, Typography } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
  return (
    <FooterComponent>
        <Typography><IconButton sx={{color:'white'}}><CopyrightIcon/></IconButton>Copyright 2023  <span style={{color:'#00684A', fontWeight:1000}}>validate24x7</span> • All rights reserved</Typography>
    </FooterComponent>
  )
}

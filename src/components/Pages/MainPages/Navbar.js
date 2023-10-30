import React from 'react'
import { AppBar, Button,Grid, Hidden, Stack, Typography, useTheme } from '@mui/material'
import { Toolbarcomponent } from '../../../styles/styles';
import { Link, NavLink } from 'react-router-dom';
import { Toolsmenu } from '../subpages/Nav/ToolMenu';
import { HomeNavlink } from '../subpages/Nav/HomeNavlink';
import { SmallDevicesMenu } from '../subpages/Nav/mobiledevices/smallDevicesMenu';



export const Navbar = () => {
    const theme = useTheme();
   
  return (

  <div style={{position:'sticky', width:'100%',top:0, zIndex:1, }}>
    <Toolbarcomponent >
        <Typography fontSize={'large'} margin={'auto'} marginLeft={'2vw'} flexGrow={1} fontWeight={'bold'} color={theme.palette.primary.main} >Validate24x7</Typography>
           <Stack direction={'row'}>
           <Hidden mdDown={true}>
            <Toolsmenu style={{ zIndex: 1, }}/></Hidden>
            <Hidden mdDown={true}>
              <HomeNavlink/>
            </Hidden>
       
           </Stack>
          <Button  sx={{color:theme.palette.background.default,marginRight:2 }}></Button>
          <SmallDevicesMenu/>
    </Toolbarcomponent>
    </div>
    
    
  
  )
}

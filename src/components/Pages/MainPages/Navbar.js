import React from 'react'
import { AppBar, Button,Grid, Hidden, Stack, Typography, useTheme ,Box} from '@mui/material'
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
           <Stack direction={'row'} margin={'auto'} justifyContent={'space-between'} >
           <Hidden mdDown={true}><Box sx={{margin:'auto'}}> <NavLink  to='/toolrequest'><Button sx={{color:'white',borderRadius:0,}} disableRipple >Toolrequest</Button></NavLink></Box></Hidden>
           <Hidden mdDown={true}>
            <Toolsmenu style={{ zIndex: 1, }}/></Hidden>
            <Hidden mdDown={true}>
              <HomeNavlink/>
            </Hidden>
          </Stack>

          <SmallDevicesMenu/>
    </Toolbarcomponent>
    </div>
    
    
  
  )
}

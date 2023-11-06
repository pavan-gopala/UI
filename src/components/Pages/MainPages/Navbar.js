import React from 'react'
import { AppBar, Button,Grid, Hidden, Stack, Typography, useTheme ,Box} from '@mui/material'
import { Toolbarcomponent } from '../../../styles/styles';
import { Link, NavLink } from 'react-router-dom';
import { Toolsmenu } from '../subpages/Nav/ToolMenu';
import { HomeNavlink, Loginlink, PaddingButton, Registerlink } from '../subpages/Nav/HomeNavlink';
import { SmallDevicesMenu } from '../subpages/Nav/mobiledevices/smallDevicesMenu';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton } from '../subpages/Nav/HomeNavlink';  


export const Navbar = () => {
    const theme = useTheme();
     const logged = useSelector((state)=>state.mailvalidation.login)
  return (
  <div style={{position:'fixed', width:'100%',top:0, zIndex:1, }}>
    <Toolbarcomponent >
        <Typography fontSize={'large'} margin={'auto'} marginLeft={'2vw'} flexGrow={1} fontWeight={'bold'} color={'white'} >Validate24x7</Typography>
           <Stack direction={'row'}  justifyContent={'space-between'} >
            {/* <Hidden mdDown={true}><Box sx={{margin:'auto'}}> <NavLink  to='/toolrequest'><Button sx={{color:'white',borderRadius:0,}} disableRipple >Toolrequest</Button></NavLink></Box></Hidden> */}
           <Hidden mdDown={true}> 
            <Toolsmenu style={{ zIndex: 1, }}/></Hidden>
            <Hidden mdDown={true}>
              <HomeNavlink/>
            </Hidden>
           {!logged && <Hidden mdDown={true}>
                <Registerlink/>
            </Hidden>}
            {!logged&&<Hidden mdDown={true}>
              <Loginlink/>
            </Hidden>}
            {logged&&<Hidden mdDown={true}>
                <LogoutButton/>
              </Hidden>}
          </Stack>
            {<PaddingButton/>}
          <SmallDevicesMenu/>
    </Toolbarcomponent>
    </div>
    
    
  
  )
}

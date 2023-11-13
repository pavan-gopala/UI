import React from 'react'
import { AppBar, Button,Grid, Hidden, Stack, Typography, useTheme ,Box} from '@mui/material'
import { Toolbarcomponent } from '../../../styles/styles';
import { Link, NavLink } from 'react-router-dom';
import { Toolsmenu } from '../subpages/Nav/ToolMenu';
import { HomeNavlink, Loginlink, PaddingButton, Registerlink } from '../subpages/Nav/HomeNavlink';
import { SmallDevicesMenu } from '../subpages/Nav/mobiledevices/smallDevicesMenu';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton } from '../subpages/Nav/HomeNavlink';  
import { setlogin, setregister } from '../../../redux/EmailValidation/validation';
export const Navbar = () => {
    const theme = useTheme();
    const dispatch  = useDispatch();
     const logged = useSelector((state)=>state.mailvalidation.login)
     React.useEffect(()=>{
      if(document.cookie.includes('jwt')){
        dispatch(setlogin(true))
      }else{dispatch(setlogin(false))}
    })
  return (
  <div style={{position:'fixed', width:'100%', zIndex:10,backgroundColor:'white',backgroundColor:'secondary.main' }}>
    <Toolbarcomponent >
        <Typography fontSize={'large'} margin={'auto'} marginLeft={'2vw'} flexGrow={1} fontWeight={'bold'} color={'primary.main'} >Validate24x7</Typography>
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

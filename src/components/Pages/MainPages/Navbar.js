import React from 'react'
import { AppBar, Button, Grid, Hidden, Stack, Typography, useTheme, Box, Toolbar, Paper } from '@mui/material'
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
    <Grid container style={{backgroundColor:theme.palette.secondary.main,alignItems:'center' ,position:'sticky',top:0,zIndex:1000 ,margin:0, padding:0,}}>
      <Grid item xs={5} sx={{paddingLeft:4, textAlign:'left', display:'flex', flexDirection:'row',  alignItems:'center'}}>
   
      <Typography fontSize={'large'}  fontWeight={'bold'} color={'background.default'} >Validate24x7</Typography>
      </Grid>
     
        <Hidden mdDown={true}> 
        
        <Grid item xs={4.5} >
        <Paper style={{display:'block',marginRight:'100%', padding:'1%',borderRadius:0 }} elevation={0}>
        <Toolsmenu style={{ zIndex: 1 }}/>
        </Paper>
        </Grid>
        </Hidden>
    
     
    <Grid item xs={2.5}>
    <Stack sx={{flexDirection:'row', display:'flex',  alignItems:'center'}} >
    <Hidden mdDown={true}>
      <Stack >
        <HomeNavlink/>
      </Stack>
    
      </Hidden>
        {!logged && <Hidden mdDown={true}>
          <Stack sx={{flexDirection:'row', alignItems:'center', }} >
            <Stack paddingLeft={2}>
          <Registerlink/>
            </Stack>
            <Stack paddingLeft={2}>
          <Loginlink/>
            </Stack>
         </Stack>
        </Hidden>}
    
        {logged&&<Hidden mdDown={true}>
          <LogoutButton />
        </Hidden>}
        </Stack>
      </Grid>
      
      <SmallDevicesMenu/>
    </Grid>
      
 
  )
}
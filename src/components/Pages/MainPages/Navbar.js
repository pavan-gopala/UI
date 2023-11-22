import React from 'react'
import {  Grid, Hidden, Stack, Typography, useTheme, Box,  Paper } from '@mui/material'
import { Toolsmenu } from '../subpages/Nav/ToolMenu';
import { HomeNavlink, Loginlink, PaddingButton, Registerlink } from '../subpages/Nav/HomeNavlink';
import { SmallDevicesMenu } from '../subpages/Nav/mobiledevices/smallDevicesMenu';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton } from '../subpages/Nav/HomeNavlink';  
import { setlogin, setregister } from '../../../redux/EmailValidation/validation';
import { Link } from 'react-router-dom';

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
    <div style={{backgroundColor: theme.palette.secondary.main, position: 'sticky', top: 0, zIndex: 1000, margin: 0, padding: 4, display:'block',}}>
      <div style={{backgroundColor: theme.palette.secondary.main, position: 'relative',  display:'block'}} >
      <div style={{display: 'inline-block', marginRight:'40%'}}>
  <Link to="/" style={{backgroundColor:'transparent',border:'0px'}} className='navbutton'>
    Validate24x7
  </Link>
</div> <Hidden mdDown={true}>
    <div style={{display: 'inline-block',marginLeft:'8%'}}>
      <Toolsmenu />
    </div>
  </Hidden>
           
  <div style={{display: 'inline-block', float: 'right', marginRight: '2%'}}>
    <Hidden mdDown={true}>
     
      {logged &&<div style={{display:'inline-block'}}>
            <LogoutButton/>
      </div> }
       {!logged&&<div style={{display:'inline-flex',}} >
          <Registerlink/>
          <Loginlink/>
          </div>}

      
    </Hidden>
  </div>
     <div style={{display:'inline-block'}}>
     <SmallDevicesMenu/>
     </div>
</div>
</div>
      
 
  )
}
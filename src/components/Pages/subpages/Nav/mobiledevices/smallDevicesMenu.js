import React, { useState,useEffect } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Hidden, IconButton, List, ListItem, Popover,Fade,Box, Drawer, Stack} from '@mui/material';
import { useTheme } from '@emotion/react';
import {Button} from '@mui/material';
import { Toolsmenumobile } from './ToolsMenumobile';
import { HomeNavlink, Loginlink, LogoutButton, Registerlink } from '../HomeNavlink';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setlogin, setregister } from '../../../../../redux/EmailValidation/validation';
import CloseIcon from '@mui/icons-material/Close';

export const SmallDevicesMenu = () => {
  const dispatch = useDispatch();
    const [anchorEl, setanchorEl] = useState(null)
    const logged = useSelector((state)=>state.mailvalidation.login)
    const theme = useTheme()
    const handleopen = (e)=>{
          setanchorEl(e.currentTarget)
    }
    const handleclose = ()=>{
        setanchorEl(null)
    }
    const handlelogout = () => {
      dispatch(setlogin(false));
      dispatch(setregister(''));
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
    useEffect(()=>{
      if(document.cookie.includes('jwt')){
        dispatch(setlogin(true))
      }else{dispatch(setlogin(false))}
    })
  return (
    <Hidden mdUp={true}>
         <IconButton onClick={handleopen} sx={{color:theme.palette.primary.main, marginRight:2}}><Button>Menu</Button><AppsIcon/></IconButton>
    <Drawer
    TransitionComponent={Fade}
   
    anchor='top'
    open={Boolean(anchorEl)}
    onClose={handleclose}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
      PaperProps={{
        style:{
          width:'100%',
          backgroundColor:theme.palette.background.default,
         
         
        }
      }}><IconButton onClick={handleclose}  sx={{marginLeft:'85%', marginTop:'2vh', fontWeight:'bold', color:'gray'}}><CloseIcon/></IconButton>
          <List >
            <ListItem sx={{flexDirection:'column', alignItems:'center'}}>
           <HomeNavlink handleclose={handleclose} mobile={true}/>
           </ListItem>
            <ListItem sx={{flexDirection:'column', alignItems:'center'}}>
            {!logged&&<Registerlink handleclose={handleclose}/>}
            </ListItem>
            <ListItem sx={{flexDirection:'column', alignItems:'center'}}>
           {!logged &&<Loginlink handleclose={handleclose}/>}
            </ListItem>
                
               {/* <Box sx={{margin:'auto'}}> <NavLink  to='/toolrequest'><Button sx={{color:'white',borderRadius:0,}} disableRipple onClick={handleclose}>Toolrequest</Button></NavLink></Box>} */}
            <ListItem  sx={{flexDirection:'column', alignItems:'center', width:'98%'}}>
            <Toolsmenumobile handleclose={handleclose}/>
            </ListItem>
            <ListItem sx={{flexDirection:'column', alignItems:'center'}}>
            {logged &&
  <Button  onClick={handlelogout}
    sx={{ width:'120px',color:'white',height:'4vh', backgroundColor:'primary.main',}}   
    startIcon={
   
        <LogoutButton sx={{ color:'primary.main' }}/>
     
    } 
  >
    Logout
  </Button>
}
</ListItem>
          
            </List>
      
    </Drawer>
    </Hidden>
  )
}

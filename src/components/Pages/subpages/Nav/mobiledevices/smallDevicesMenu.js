import React, { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Hidden, IconButton, List, ListItem, Popover,Fade,Box, Drawer, Stack} from '@mui/material';
import { useTheme } from '@emotion/react';
import {Button} from '@mui/material';
import { Toolsmenumobile } from './ToolsMenumobile';
import { HomeNavlink, Loginlink, LogoutButton, Registerlink } from '../HomeNavlink';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const SmallDevicesMenu = () => {
    const [anchorEl, setanchorEl] = useState(null)
    const logged = useSelector((state)=>state.mailvalidation.login)
    const theme = useTheme()
    const handleopen = (e)=>{
          setanchorEl(e.currentTarget)
    }
    const handleclose = ()=>{
        setanchorEl(null)
    }
  return (
    <Hidden mdUp={true}>
         <IconButton onClick={handleopen} sx={{color:theme.palette.primary.main, marginRight:2}}><Button>Menu</Button><AppsIcon/></IconButton>
    <Drawer
    TransitionComponent={Fade}
   
    anchor='right'
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
          width:'50%',
          backgroundColor:theme.palette.secondary.main,
          top: '9vh',
        }
      }}>
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
            <ListItem sx={{flexDirection:'column', alignItems:'center'}}>
            <Toolsmenumobile handleclose={handleclose}/>
            </ListItem>
            <ListItem sx={{flexDirection:'column', alignItems:'center'}}>
            {logged &&
  <Button 
    sx={{ color:'white', backgroundColor:'primary.main', paddingLeft:0, paddingRight:4, borderRadius:0, }}   
    startIcon={ 
      <IconButton>
        <LogoutButton sx={{ color:'primary.main' }}/>
      </IconButton>
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

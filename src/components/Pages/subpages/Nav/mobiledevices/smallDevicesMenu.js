import React, { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Hidden, IconButton, List, ListItem, Popover,Fade,Box, } from '@mui/material';
import { useTheme } from '@emotion/react';
import {Button} from '@mui/material';
import { Toolsmenumobile } from './ToolsMenumobile';
import { HomeNavlink } from '../HomeNavlink';
import { NavLink } from 'react-router-dom';

export const SmallDevicesMenu = () => {
    const [anchorEl, setanchorEl] = useState(null)
    const theme = useTheme()
    const handleopen = (e)=>{
          setanchorEl(e.currentTarget)
    }
    const handleclose = ()=>{
        setanchorEl(null)
    }
  return (
    <Hidden mdUp={true}>
         <IconButton onClick={handleopen} sx={{color:theme.palette.primary.main}}><Button>Menu</Button><AppsIcon/></IconButton>
    <Popover
    TransitionComponent={Fade}
   
    anchorEl={anchorEl}
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
          backgroundColor:theme.palette.secondary.main,
          marginTop: 20,
        }
      }}>
        <List sx={{height:'100%'}}>
            <ListItem>
            <HomeNavlink handleclose={handleclose}/>
                <Toolsmenumobile handleclose={handleclose}/>
               <Box sx={{margin:'auto'}}> <NavLink  to='/toolrequest'><Button sx={{color:'white',borderRadius:0,}} disableRipple onClick={handleclose}>Toolrequest</Button></NavLink></Box>
            </ListItem>
        </List>
    </Popover>
    </Hidden>
  )
}

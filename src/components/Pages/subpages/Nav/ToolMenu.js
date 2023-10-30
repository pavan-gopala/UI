import React, { useState } from 'react';
import { Button, Hidden, Popover, List, ListItem,useTheme, Box, IconButton, Portal } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setshowTools } from '../../../../redux/EmailValidation/validation';

export const Toolsmenu = () => {
  const theme = useTheme();
  const [anchorEl, setanchorEl] = useState(null);
  const showTools = useSelector((state)=>state.mailvalidation.showTools)
 const dispatch = useDispatch();
  const handleToolsMenu = (e) => {
    setanchorEl(e.currentTarget);
    dispatch(setshowTools(e.currentTarget))
  };

  const handleToolsClose = () => {
    setanchorEl(null);
    dispatch(setshowTools(null))
  };

  return (
   <>
     
     <Button variant='outlined'  sx={{position:'inherit', marginTop:1, marginBottom:1}}   onMouseMoveCapture={handleToolsMenu}  endIcon={  <IconButton sx={{color:theme.palette.primary.main, transform:anchorEl?'rotate(180deg)':'rotate(0deg)',transition:'transform 0.3s ease',}}>
        <KeyboardArrowUpIcon/>
     </IconButton>}>Tools</Button>
     
     <Portal>

       
<Popover

  open={Boolean(showTools)}
  anchorEl={showTools}
  onClose={handleToolsClose}
  anchorOrigin={{
   
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  
  }}
  PaperProps={{
      style: {
       borderRadius:0,
        backgroundColor:theme.palette.secondary.main,
        
        zIndex:1,
      },
    }}
>
  <List sx={{width:'100%',height:'100%'}} onMouseLeave={handleToolsClose}>
    <ListItem onClick={handleToolsClose}>
      <NavLink to={'/emailvalidation'}><Button sx={{color:'white',borderRadius:0,}} disableRipple>Email validation</Button></NavLink>
    </ListItem>
    <ListItem >
      <NavLink to='/mxrecordslookup'><Button sx={{color:'white',borderRadius:0, }} disableRipple onClick={handleToolsClose}>Mx Record Lookup</Button></NavLink>
    </ListItem>
    <ListItem>
      <NavLink to='/site/serverInfocheck'><Button sx={{color:'white',borderRadius:0,}} disableRipple onClick={handleToolsClose}>server/site info Scan</Button></NavLink>
    </ListItem>
  </List>
</Popover>
</Portal>
     
   </>
  );
};

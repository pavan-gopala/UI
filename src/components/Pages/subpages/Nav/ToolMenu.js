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
     
     <Button variant='outlined'  sx={{position:'inherit', marginTop:1, marginBottom:1}}   onMouseOver={handleToolsMenu}  endIcon={  <IconButton   sx={{
    color: theme.palette.primary.main,
    transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
   
  }}>
        <KeyboardArrowUpIcon/>
     </IconButton>}>Tools</Button>
     
    
  <Popover
    open={Boolean(showTools)}
    anchorEl={anchorEl}
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
        borderRadius: 0,
        backgroundColor: theme.palette.secondary.main,
        maxWidth: '100%',
      },
    }}
  >
    <List sx={{ position: 'static' }} onMouseLeave={handleToolsClose}>
      <ListItem onClick={handleToolsClose}>
      <Button
  component={NavLink}
  to="/emailvalidation"sx={{  color: 'white', borderRadius: 0,}}disableRipple aria-label='Emailvalidation'>
       Email validation
       </Button>
      </ListItem>
      <ListItem>
        <Button to='/mxrecordslookup' sx={{ color: 'white', borderRadius: 0 }} aria-label='Mxrecordlookup' component={NavLink} disableRipple onClick={handleToolsClose}>
          Mx Record Lookup
        </Button>
      </ListItem>
      <ListItem>
        <Button to='/site/serverInfocheck' sx={{ color: 'white', borderRadius: 0 }} aria-label='server/site infoscan' component={NavLink}  disableRipple onClick={handleToolsClose}>
          Server/Site Info Scan
        </Button>
      </ListItem>
    </List>
  </Popover>


     
   </>
  );
};

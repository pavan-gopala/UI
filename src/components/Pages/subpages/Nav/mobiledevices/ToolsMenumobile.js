import React, { useState } from 'react';
import { Button, Popover, List, ListItem,useTheme, Box, IconButton, Portal } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setshowTools } from '../../../../../redux/EmailValidation/validation';

export const Toolsmenumobile = () => {
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
     
     <Button  sx={{position:'inherit'}}   onClick={handleToolsMenu} endIcon={  <IconButton sx={{color:theme.palette.primary.main, transform:anchorEl?'rotate(180deg)':'rotate(0deg)',transition:'transform 0.3s ease',}}>
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
        
       
      },
    }}
>
  <List  onMouseLeave={handleToolsClose} sx={{height:'100%',}}>
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
</Portal>
     
   </>
  );
};

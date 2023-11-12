import React, { useState } from 'react';
import { Button, Popover, List, ListItem,useTheme, Box, IconButton, Portal,Fade ,Typography} from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setshowTools } from '../../../../../redux/EmailValidation/validation';

export const Toolsmenumobile = ({handleclose}) => {
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
    handleclose();
  };

  return (
   <>
     
     <Button sx={{paddingLeft:0, paddingRight:2,  backgroundColor:anchorEl?'white':'primary.main', color:anchorEl?'primary.main':'white'}}   onClick={handleToolsMenu} startIcon={<IconButton>
        <KeyboardArrowDown sx={{color:anchorEl?'primary.main':'white',transform: anchorEl ? 'rotate(90deg)' : 'none'}}/>
     </IconButton>} >Tools</Button>
     <Portal>

       
<Popover
  TransitionComponent={Fade}
  open={Boolean(showTools)}
  anchorEl={showTools}
  onClose={handleToolsClose}
  disableScrollLock={true}
  anchorOrigin={{
   
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'right',
  
  }}
  PaperProps={{
      style: {
       borderRadius:0,
        backgroundColor:theme.palette.secondary.main,
      },
    }}
>
  <List  onMouseLeave={handleToolsClose} sx={{height:'100%',}}>
  {/* <ListItem onClick={handleToolsClose}>
      <Button
  component={NavLink}
  to="/emailvalidation"sx={{  color: 'white', borderRadius: 0,}}disableRipple aria-label='Emailvalidation'>
       Email validation
       </Button>
      </ListItem> */}
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

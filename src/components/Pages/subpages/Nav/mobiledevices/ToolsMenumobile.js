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
     
     <button className='navtoolbuttonmobile' style={{ padding:0, marigin:0, display:'inline-flex', flexDirection:'row',justifyContent:'center', alignItems:'center',  }}   onClick={handleToolsMenu} >
        <KeyboardArrowDown sx={{color:'white'}}/>
     <h4 style={{padding:3}}>Tools</h4></button>
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
    vertical: 'right',
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
  {/* <ListItem onClick={handleToolsClose}>
      <Button
  component={NavLink}
  to="/emailvalidation"sx={{  color: 'white', borderRadius: 0,}}disableRipple aria-label='Emailvalidation'>
       Email validation
       </Button>
      </ListItem> */}
      
    <ListItem>
      <a href='/mxrecordslookup'  className='anchor'  rel="noreferrer">Mxrecord lookup</a>
    </ListItem>
    <ListItem>
      <a href='/site/serverInfocheck'  className='anchor'  rel="noreferrer">Server/site info</a>
    </ListItem>
    <ListItem>
      <a href='/portavailabilitycheck'  className='anchor'  rel="noreferrer">Port availability check</a>
    </ListItem>
  </List>
</Popover>
</Portal>
     
   </>
  );
};

import React, { useState } from 'react';
import { Button, Hidden, Popover,Fade, List, ListItem,useTheme, Box, IconButton, Portal, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { setshowTools } from '../../../../redux/EmailValidation/validation';
import '../../../../styles/styles.css'

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
     
     <Button sx={{position:'relative',color:'background.default',backgroundColor:'primary.main',borderRadius:0,height:'5vh',margin:'auto',width:'120px'}}   onMouseMoveCapture={handleToolsMenu}  endIcon={ <IconButton>
        <KeyboardArrowDownIcon sx={{color:'background.default',position:'absolute' , }}/>
     </IconButton>} >Tools</Button>
     
<Popover
  disableScrollLock={true}
  className="popover"
  TransitionComponent={Fade}
  open={Boolean(showTools)}
  anchorEl={showTools}
  onClose={handleToolsClose}
  anchorOrigin={{
   
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
  PaperProps={{
      style: {
       borderRadius:0,
        backgroundColor:theme.palette.primary.main,
        zIndex:1,
        
      },
    
    }}
>
  <List sx={{width:'100%',height:'100%',}} onMouseLeave={handleToolsClose}>
    {/* <ListItem onClick={handleToolsClose}>
      <NavLink to={'/emailvalidation'}><Button sx={{color:'background.default',borderColor:'background.default', borderRadius:0,}} variant='outlined' disableRipple>Email validation</Button></NavLink>
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

     
   </>
  );
};

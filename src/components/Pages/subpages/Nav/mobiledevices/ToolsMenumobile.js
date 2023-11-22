import React, { useEffect, useState } from 'react';
import { Button, Popover, List, ListItem,useTheme, Box, IconButton, Portal,Fade ,Typography} from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {useDispatch, useSelector} from 'react-redux'
import { setshowTools } from '../../../../../redux/EmailValidation/validation';
import { Link } from 'react-router-dom';

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
  onClose={handleclose}
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
  <List  onClick={()=>handleToolsClose} sx={{height:'100%',}}>
  {/* <ListItem onClick={handleToolsClose}>
      <Button
  component={NavLink}
  to="/emailvalidation"sx={{  color: 'white', borderRadius: 0,}}disableRipple aria-label='Emailvalidation'>
       Email validation
       </Button>
      </ListItem> */}
      
    <ListItem>
      <Link to='/mxrecordslookup' onClick={handleToolsClose}  className='anchor'  rel="noreferrer">Mxrecord lookup</Link>
    </ListItem>
    <ListItem>
      <Link to='/site/serverInfocheck' onClick={handleToolsClose}  className='anchor'  rel="noreferrer">Server/site info</Link>
    </ListItem>
    <ListItem>
      <Link to='/portavailabilitycheck' onClick={handleToolsClose}  className='anchor'  rel="noreferrer">Port availability check</Link>
    </ListItem>
  </List>
</Popover>
</Portal>
     
   </>
  );
};

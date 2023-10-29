import React, { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Hidden, IconButton, List, ListItem, Popover } from '@mui/material';
import { useTheme } from '@emotion/react';
import {Button} from '@mui/material';
import { Toolsmenumobile } from './ToolsMenumobile';

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
         <IconButton onClick={handleopen} sx={{color:theme.palette.primary.main}}><AppsIcon/></IconButton>
    <Popover
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleclose}
    anchorOrigin={{
   
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      
      }}
      PaperProps={{
        style:{
          width:'100%',
          backgroundColor:theme.palette.secondary.main
        }
      }}>
        <List sx={{height:'100%'}}>
            <ListItem>
                <Toolsmenumobile/>
            </ListItem>
        </List>
      
    </Popover>
    </Hidden>
  )
}

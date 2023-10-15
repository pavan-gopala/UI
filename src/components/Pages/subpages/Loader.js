import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { IconButton } from '@mui/material';

export const Loader = () => {
  return (
    <IconButton sx={{padding:7}}><CircularProgress/></IconButton>
  )
}

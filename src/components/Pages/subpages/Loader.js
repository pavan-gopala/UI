import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, IconButton, Typography } from '@mui/material';
import { SyncLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import '../../../styles/styles.css';


export const Loader = () => {
  

  return (
  <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:'20vh'}}>
  <div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</div>
  )
}

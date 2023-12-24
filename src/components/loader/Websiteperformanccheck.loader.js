import React from 'react'
import '../../styles/styles.css';
import {ReactComponent as Loader} from '../../Images/svg1.svg';
import { Hidden } from '@mui/material';

export const Websiteperformanccheck = () => {
  return (
     <div className='loaderwebperformancecheck'>
        <Hidden mdDown={true}>
             <Loader style={{height:'20vh', width:'6vw',}}/>
             </Hidden>
             <Hidden mdUp={true}>
                <Loader style={{height:'40vh', width:'20vw',}}/>
             </Hidden>
     </div>
  )
}

import React, { useEffect } from 'react'
import {  DescriptionComponent } from '../../../../styles/styles'
import { Grid, } from '@mui/material'
import { Loader } from '../Loader'
import { useSelector,useDispatch } from 'react-redux';
import { setValidation, setshowvalidation } from '../../../../redux/EmailValidation/validation'
import { SiteInfoTable } from './SiteInfoTable';
import { SiteInfoForm } from './SiteInfoform';


export const SiteInfo = () => {
  const loading = useSelector((state)=>state.mailvalidation.isLoading)
  const showvalidation = useSelector((state)=>state.mailvalidation.showvalidation)
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(setshowvalidation(false))
      
  },[])
  
  return (<div style={{minHeight:'75vh'}}>
    <DescriptionComponent>
         <h2 style={{padding:15, color:'#00684A'}}>Site/server Info scanner</h2>
         <p style={{paddingTop:0, paddingLeft:10, paddingRight:10, paddingBottom:40}}>SiteInfoScanner is a web tool that quickly provides essential details about websites and servers, including IP addresses, geographic location, ISP, and more. It's your go-to resource for web insights in a snap.</p>
    </DescriptionComponent>
    <Grid container>
    <Grid item xs={11} sm={9} margin={'auto'}>
    <SiteInfoForm/>
        {loading&&<Loader/>}
        {showvalidation&&<SiteInfoTable/>}
        
         
    </Grid>
    
    </Grid>
    
    </div>
  )
}

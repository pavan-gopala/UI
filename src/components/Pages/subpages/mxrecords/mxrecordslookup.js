import React, { useEffect } from 'react'
import {  DescriptionComponent } from '../../../../styles/styles'
import { Grid,useTheme } from '@mui/material'
import { Loader } from '../Loader'
import { useSelector,useDispatch } from 'react-redux';
import { MxTable } from './Table'
import { MxForm } from './MxForm'
import { setValidation, setshowvalidation } from '../../../../redux/EmailValidation/validation'
import '../../../../styles/styles.css';
export const Mxrecordslookup = () => {
  const theme = useTheme();
  const loading = useSelector((state)=>state.mailvalidation.isLoading)
  const showvalidation = useSelector((state)=>state.mailvalidation.showvalidation)
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(setshowvalidation(false))
  },[])
  
  return (<div style={{minHeight:'75vh'}}>
    <DescriptionComponent>
         <h2 className={"toolhead"}>Mx Record Lookup</h2>
         <p className={"tooldescription"}>MX Record Lookup: Discover the email servers responsible for a domain. Essential for email delivery, MX records show where emails are received.</p>
    </DescriptionComponent>
    <Grid container>
    <Grid item xs={11} sm={9} margin={'auto'}>
    <MxForm/>
        {loading&&<Loader/>}
        {showvalidation&&<MxTable/>}
        
         
    </Grid>
    
    </Grid>
    
    </div>
  )
}

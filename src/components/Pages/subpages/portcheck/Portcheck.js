import React, { useEffect } from 'react'
import {  DescriptionComponent } from '../../../../styles/styles'
import { Grid, } from '@mui/material'
import { Loader } from '../Loader'
import { useSelector,useDispatch } from 'react-redux';
import { setValidation, setshowvalidation } from '../../../../redux/EmailValidation/validation'
import { PortTable } from './Porttable';
import { PortForm } from './Portform';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom/dist';


export const PortCheck = () => {
  const loading = useSelector((state)=>state.mailvalidation.isLoading)
  const showvalidation = useSelector((state)=>state.mailvalidation.showvalidation)
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(setshowvalidation(false))
  },[])
  
  return (<div style={{minHeight:'75vh'}}>
    <DescriptionComponent>
    <Helmet>
          <title>Port Availability Check | Validate 24x7</title>
          <meta name="description" content="Use our Port Availability Check tool to check if specific ports on a server or host are open or closed. Essential for understanding your network's security posture or troubleshooting specific network services." />
    </Helmet>
    <h1 className='toolhead'>Port availability check</h1>
         <h2 className='tooldescription'>Port Availability Check: This tool allows you to check if a specific port on a server or a 
         host is open or closed. It is useful for understanding your network's security posture or for 
         troubleshooting specific network services. By entering an IP address and a port number, you can see if a connection 
         can be established through that port. Back to <Link to='/'>Home</Link></h2>
    </DescriptionComponent>
    <Grid container>
    <Grid item xs={11} sm={9} margin={'auto'}>
    <PortForm/>
        {loading&&<Loader/>}
        {showvalidation&&<PortTable/>}
        
         
    </Grid>
    
    </Grid>
    
    </div>
  )
}

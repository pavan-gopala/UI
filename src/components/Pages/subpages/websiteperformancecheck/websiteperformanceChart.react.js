import React from 'react'
import { Grid, } from '@mui/material'
import { useSelector } from 'react-redux';
import '../../../../styles/styles.css';

export const WebsitePerformanceChart = () => {
  const  data = useSelector((state)=>state.mailvalidation?.validationResult?.data?state.mailvalidation.validationResult.data : '')
  const domain = useSelector((state)=>state.mailvalidation?.email)
  const ArrayData = Object.entries(data);
  const {key,value} = ArrayData[0];
  
  
  return (
    <Grid container marginBottom={10} >
      <Grid item xs={12} sm={12} style={{textAlign:'left'}}>
        <h5>Input:<span style={{fontSize:'medium', color:'darkcyan'}}>{domain.values.domain}</span></h5>
      </Grid>
      <Grid container sm={8} xs={12}>
        
          {Object.entries(data)?.map(([key,value]) => renderData(key, value))}
       
      </Grid>
    </Grid>
  );
}

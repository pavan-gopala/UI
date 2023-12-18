import React from 'react'
import { Grid, } from '@mui/material'
import { useSelector } from 'react-redux';
import '../../../../styles/styles.css';

export const OutputData = () => {
  const  data = useSelector((state)=>state.mailvalidation?.validationResult?.data?state.mailvalidation.validationResult.data : '')
  const domain = useSelector((state)=>state.mailvalidation?.email)
  const renderData = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <Grid item xs={12} sm={12} style={{backgroundColor:'white',color:'black',}} className='outputshow'>
        <div key={key}>
          <h5 style={{textAlign:'left',paddingLeft:14}}>{key}:</h5>
          {Object.entries(value).map(([subKey, subValue]) => renderData(subKey, subValue))}
        </div>
        </Grid>
      );
    } else {
      return (
        <Grid key={key}  item xs={10} sm={10} style={{backgroundColor:'white',color:'black',margin:'auto',marginBottom:20, marginLeft:6,padding:0}} className='outputshow'>
       
          <h5 style={{textAlign:'left',paddingLeft:14, color:'darkcyan'}}>{key} : <span style={{color:'black'}} dangerouslySetInnerHTML={{ __html: value }}></span></h5>
        
        </Grid>
      );
    }
  };
  
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

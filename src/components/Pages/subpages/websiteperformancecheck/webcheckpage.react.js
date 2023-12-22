import React from "react";
import { Grid, } from "@mui/material";
import  {ReactComponent as Restapiicon} from "../../../../Images/svg7.svg";
import {ReactComponent as Aiicon} from "../../../../Images/svg8.svg";
import {ReactComponent as Accurateicon} from "../../../../Images/svg9.svg";
import {ReactComponent as Freeicon} from "../../../../Images/svg10.svg";
import websitedata from  "./webcheckpagedata.json";
const classes = {
  svgIcon: {
    fill : "#00684A",
    width  : "20%",
    height : "20%",
    padding: "2%",
  },
  Griditem: {
    padding: "5%",
  },
};

export const Webcheckpage = () => {  
  return (
    <Grid container style={{justifyContent:'center', alignItems:'center'}}>
      {websitedata.data.map((item)=>{
        let Icon = "";
          switch (item.name){
            case "restapi":
              Icon = Restapiicon;
              break;
            case "ai":
              Icon = Aiicon;
              break;
            case "accurate":
              Icon = Accurateicon;
              break;
            case "free":
              Icon = Freeicon;
              break;
          }
        return(
          <Grid item xs={10} md={4} style={classes.Griditem}>
            <div>
              <Icon style={classes.svgIcon} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Grid>
        )
      })}
      {websitedata.Grid2Data.map((item)=>{
        return (
          <Grid item xs={12} md={12} style={classes.Griditem}>
            <div style={{backgroundColor:"white",padding:'5%', textAlign:'left'}}>
              <p ><span style={{fontSize:18, fontWeight:"bold"}}>{item.title}: </span> </p>
              
              
              
              <p style={{marginTop:'1vh'}}>{item.description2}</p>
            </div>
          </Grid>
        )
      })}
    </Grid>
  );
};

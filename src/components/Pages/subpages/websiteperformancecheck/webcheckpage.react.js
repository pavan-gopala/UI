import React from "react";
import { Button, Grid, Paper, } from "@mui/material";
import  {ReactComponent as Restapiicon} from "../../../../Images/svg7.svg";
import {ReactComponent as Aiicon} from "../../../../Images/svg8.svg";
import {ReactComponent as Accurateicon} from "../../../../Images/svg9.svg";
import {ReactComponent as Freeicon} from "../../../../Images/svg10.svg";
import websitedata from  "./webcheckpagedata.json";
const classes = {
  svgIcon: {
    fill : "rgb(255, 127, 80)",
    width  : "18%",
    height : "20%",
    padding: "2%",
  },
  Griditem: {
    padding: "3.5%",
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
          <Grid item xs={12} md={3} style={classes.Griditem}>
            <div style={{padding:'10px'}}>
              <Icon style={classes.svgIcon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Grid>
        )
      })}
      {websitedata.Grid2Data.map((item)=>{
        return (
          <Grid item xs={12} md={12} style={classes.Griditem}>
            <Paper elevation={2} style={{backgroundColor:"white",padding:'5%', textAlign:'left'}}>
              <p ><span style={{fontSize:16, fontWeight:"bold",}}>{item.title.toUpperCase()}: </span> </p>
              <p style={{marginTop:'1vh'}}>{item.description2}</p>
              <Button variant="contained">learn more</Button>
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  );
};

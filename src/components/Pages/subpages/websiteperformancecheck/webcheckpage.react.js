import React from "react";
import { Button, Grid, Hidden, Paper, } from "@mui/material";
import  {ReactComponent as Restapiicon} from "../../../../Images/svg7.svg";
import {ReactComponent as Aiicon} from "../../../../Images/svg8.svg";
import {ReactComponent as Accurateicon} from "../../../../Images/svg9.svg";
import {ReactComponent as Freeicon} from "../../../../Images/svg10.svg";
import websitedata from  "./webcheckpagedata.json";
import Descriptonimage from "../../../../Images/webdescription.png";
import { PerformanceBar } from "./charts/performance.bar";
const classes = {
  svgIcon: {
    fill : "rgb(234, 81, 65)",
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
    <Grid container style={{justifyContent:'center', alignItems:'center',marginBottom:'5vh'}}>
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
          <Grid item xs={12} md={3} style={classes.Griditem} marginBottom={'2vh'} >
            <div style={{padding:'10px'}}>
              <Icon style={classes.svgIcon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Grid>
        )
      })}
      <div style={{marginBottom:'5vh'}}>
         <p style={{color:'transparent'}}>.</p>
      </div>
      {websitedata.Grid2Data.map((item)=>{
        return (
          <Grid item xs={12} md={12} style={classes.Griditem}>
            <Paper elevation={0} style={{backgroundColor:"white",padding:'5%', textAlign:'left'}}>
              <div style={{display:'flex', flexDirection:'row',}}>
                <Hidden mdDown={true}>
               <div style={{ marginTop: "-20vh", marginRight:'10vw', marginLeft:'-4vw', }}>
              <img src={Descriptonimage} alt="description" style={{width:'40vw', height:'50vh'}}/>
               </div>
                </Hidden>
              <div>
              <p ><span style={{fontSize:16, fontWeight:"bold", paddingBottom:'3%'}}>{item.title.toUpperCase()}: </span> </p>
              <p style={{marginTop:'1vh', paddingBottom:"10px"}}>{item.description2}</p>
              <button className="webperformancebutton">learn more</button>
              </div>
              </div>
            </Paper>
          </Grid>
        )
      })}
      
    </Grid>
  );
};

import React from 'react'
import '../../../../../styles/performancebar.css';
import { useSelector } from 'react-redux';
import { Grid, Hidden, IconButton, Typography, containerClasses } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CategoryIcon from '@mui/icons-material/Category';
import { light } from '@mui/material/styles/createPalette';
import GradeIcon from '@mui/icons-material/Grade';
import {ReactComponent as Gradesvg}  from '../../../../../Images/websiteperformancecheck/best.svg';

export const PerformanceBar = () => {
  const  data = useSelector((state)=>state.mailvalidation?.validationResult?.data?state.mailvalidation.validationResult.data : '')
  const domain = useSelector((state)=>state.mailvalidation?.email)
  const progressData = data.necessaryData?.scores?? "";

  console.log(progressData)
  const container = {
       GridClass :{
           alignItems: 'center',
           justifyContent: 'center',
           margin: 'auto',
           padding:'10px'
       },
       GridClass1 :{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        border:'1px dotted rgb(234, 81, 65)',
        padding:'30px',
        margin:'40px',
       },
       font: {
         fontSize:'smaller',
         fontWeight: light,
         padding:'0px',
         margin:'0px'
       },
       scorehead :{
         color:'rgb(234, 81, 65)',
         border: '1px solid rgb(234, 81, 65)',
         padding:'5px',
         marginBottom:'10px',
       }
  }
  let gradient;
  const setGradient = (score)=>{  
  if (score < 30) {
    gradient = `conic-gradient(#ff0000 ${score}%, #ff0000 0%, #ffff ${score}%)`; // red
  } else if (score <= 70) {
    gradient = `conic-gradient(#ffae42 ${score}%, #ffae42 0%, #ffff ${score}%)`; // orange
  } else {
    gradient = `conic-gradient(#008000 ${score}%, #008000 0%, #ffff ${score}%)`; // green
  } }

  const assignGrade = (score) => {
    if (score < 30) {
      return 'F';
    } else if (score <= 70) {
      return 'B';
    }else {
      return 'A';
    }
   
  }
  const assignGradeColor = (Grade)=>{
    if(Grade === 'A'){
      return ('#008000')
    }else if(Grade === 'B'){
      return ('#ffae42')
    }else{
      return ('#ff0000')
    }
  }
 
  return (
    <Grid  container width={"100%"} style={container.GridClass1}>
      <Grid className='hidemdup' item xs={12} style={{marginRight:'0%',marginBottom:'20px'}}>
      <h3 style={{color:'rgb(234, 81, 65)'}}>DETAILED REPORT:</h3>
      </Grid>
      
      <Grid className='hidemddown' item xs={12} style={{marginRight:'80%',marginBottom:'20px'}}>
      <h3 style={{color:'rgb(234, 81, 65)'}}>DETAILED REPORT:</h3>
      </Grid>
             {Object.entries(progressData).map(([key, value])=>{
              
              let score = (value * 100).toFixed(2)
               score = Math.round(score);
               if(value === null || undefined || ''){
                score = 0;
              }
              setGradient(score)

              
              let performance = {
                s1:{
                  backgroundImage: gradient,
                  border: '1px solid gray', // Add this line
                  margin:'auto'
                }
              }
              let categorizeScore = (score) => {
                if (score < 30) {
                  return {categ:'Bad', Icon:<ClearIcon/>};
                } else if (score <= 70) {
                  return {categ:'Average', Icon:<CheckIcon/>};
                } else {
                  return {categ:'Good',Icon:<GppGoodIcon/>};
                }
              }
              const categScore = categorizeScore(score);
              const Grade = assignGrade(score);
              let gradecolor = assignGradeColor(Grade)
              
              return (
                    
                      
                            <Grid key={key} item xs={12} md={2} style={container.GridClass}>
                            <div  >
                              <div style={container.scorehead}>
                                <h3 >{key}</h3>
                              </div>
                        <div class="circle" style={performance.s1}>
                            <div class="inner">{score}</div>
                        </div>
                        <Grid item xs={12} style={{margin:'20px', textAlign:'left',marginLeft:'20%'}}>
                          <h4 style={container.font}><IconButton style={{color:gradecolor}}>{categScore.Icon}</IconButton>{key}: {score}</h4>
                          <h4 style={container.font}><IconButton style={{color:'pink'}}><CategoryIcon/></IconButton>Catergory: {categScore.categ}</h4>
                          <h4 style={container.font}><Gradesvg style={{fill:gradecolor,height:'5vh', width:'5vw'}}/>{`Grade: `}<span style={{color:gradecolor, fontSize:'Medium'}}>{Grade}</span></h4>
                        </Grid>
                        </div>
                        </Grid>
                   
             )}            
             )}
    </Grid>
  )
}

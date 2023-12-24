import React from 'react'
import '../../../../../styles/performancebar.css';
import { useSelector } from 'react-redux';
import { Grid, Typography, containerClasses } from '@mui/material';
export const PerformanceBar = () => {
  const  data = useSelector((state)=>state.mailvalidation?.validationResult?.data?state.mailvalidation.validationResult.data : '')
  const domain = useSelector((state)=>state.mailvalidation?.email)
  const progressData = data.necessaryData?.scores?? "";

  console.log(progressData)
  const container = {
       GridClass :{
           alignItems: 'center',
           justifyContent: 'center',
           margin: 'auto'
       },
       GridClass1 :{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        border:'1px dotted rgb(234, 81, 65)',
        padding:'30px',
        margin:'10px',
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
                  return 'Bad';
                } else if (score <= 70) {
                  return 'Average';
                } else {
                  return 'Good';
                }
              }
              const Grade = assignGrade(score);
              let gradecolor = assignGradeColor(Grade)
              
              return (
                    
                      
                            <Grid key={key} item xs={12} md={2} style={container.GridClass}>
                            <div  >
                        <div class="circle" style={performance.s1}>
                            <div class="inner">{score}</div>
                        </div>
                        <div style={{margin:'20px', textAlign:'left',marginLeft:'20%'}}>
                          <h4>{key}: {score}</h4>
                          <h4>Catergory: {categorizeScore(score)}</h4>
                          <h4>{`Grade: `}<span style={{color:gradecolor, fontSize:'Medium'}}>{Grade}</span></h4>
                        </div>
                        </div>
                        </Grid>
                   
             )}            
             )}
    </Grid>
  )
}

import React,{useEffect, useState} from 'react'
import '../../../../../styles/performancebar.css';
import { useSelector } from 'react-redux';
import { Grid,styled, Hidden, IconButton, TableRow,TableContainer,TableCell, TableBody, TableHead,  Typography, containerClasses, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CategoryIcon from '@mui/icons-material/Category';
import { light } from '@mui/material/styles/createPalette';
import GradeIcon from '@mui/icons-material/Grade';
import {ReactComponent as Gradesvg}  from '../../../../../Images/websiteperformancecheck/best.svg';
import {ReactComponent as Categsvg} from '../../../../../Images/websiteperformancecheck/categorise.svg';
import {ReactComponent as Dislikesvg} from '../../../../../Images/websiteperformancecheck/dislike.svg';
import {ReactComponent as Shieldsvg} from '../../../../../Images/websiteperformancecheck/shield (1).svg';
import {ReactComponent as Averagesvg} from '../../../../../Images/websiteperformancecheck/check.svg';
import { TableCellComponent, TableHeaderCellComponent } from '../modifycelldata/ModifyCellData';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import '../../../../../styles/styles.css';
import chromePng from '../../../../../Images/websiteperformancecheck/chrome.png';
import infoPng from '../../../../../Images/websiteperformancecheck/mode.png';
import {
  Grid as DataGrid,
  Table,
  TableHeaderRow,
  TableColumnResizing
} from '@devexpress/dx-react-grid-material-ui';
import { TableRowCustom } from '../modifycelldata/ModifyCellData';
export const PerformanceBar = () => {
  const  data = useSelector((state)=>state.mailvalidation?.validationResult?.data?state.mailvalidation.validationResult.data : '')
  let domain = useSelector((state)=>state.mailvalidation?.email? state.mailvalidation?.email.values?.url ?? '':'')
  const navigate = useNavigate();
  // domain = domain??"";
  let progressData = data.necessaryData?.scores ?? {Performance:0.5, Accessibility:0.3, Seo:0.2, BestPractices:0.8,Pwa:0.8};
  const [columnWidths, setColumnWidths] = useState([
    {columnName: '', width:150}
  ])
 
  console.log("columnWidths:",columnWidths)
  const container = {
       GridClass :{
           alignItems: 'center',
           justifyContent: 'center',
           marginTop: '20px',
           border:'1px solid orange',
           padding:'8px',
           marginLeft:'8px',
           marginRight:'8px',  
           
       },
       GridClass1 :{
        width:'90vw',
        height:'auto',
        alignItems: 'center',
        justifyContent: 'center',
        border:'1px dotted rgb(234, 81, 65)',
        padding:'25px',
        margin:'auto',

        
        
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
       },
       Icons :{
        height:'4vh',
        width:'4vh',
        padding:'1px'
       }
      
  }
  
  const TooltipInfo = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement='top-end'/>
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'lightgrey',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      borderRadius: '0px',
    },
  }));
  let gradient;
  const setGradient = (score)=>{  
  if (score < 30) {
    gradient = `conic-gradient(#ff0000 ${score}%, #ff0000 0%, #ffff ${score}%)`; // red
  } else if (score <= 70) {
    gradient = `conic-gradient(#3568c5 ${score}%, #ffae42 0%, #ffff ${score}%)`; // orange
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
      return ('#3568c5')
    }else{
      return ('#ff0000')
    }
  }


  
 
 
  return (
    <Grid  container   style={{...container.GridClass1 ,}} >
      <Grid className='hidemdup' item xs={10} style={{marginRight:'0%',marginBottom:'20px'}} >
      <h4 style={{color:'rgb(234, 81, 65)'}}>Url: {domain}</h4>
      </Grid>
      <Grid className='hidemddown' item xs={10} style={{marginRight:'0%',marginBottom:'20px'}} >
      <div className='hidemddown'  style={{marginBottom:'20px', display:'flex', flexDirection:'row',justifyContent:'space-around', width:'100%' }} >
      <h4 style={{color:'rgb(234, 81, 65)', textAlign:'center',margin:'auto', backgroundColor:'lightgrey', padding:'8px'}}>Url: {domain}</h4>
      <button className='webperformancebutton' onClick={()=>navigate('/')}>Check Again</button>
      </div>
     
        </Grid>
        <Grid className='hidemdup' item xs={12} style={{marginRight:'0%',marginBottom:'20px'}} >
      <button className='webperformancebutton' onClick={()=>navigate('/')}>Check Again</button>
        </Grid>
      <Grid className='hidemdup' item xs={12} style={{marginRight:'0%',marginBottom:'20px'}}>
      <h3 style={{color:'rgb(234, 81, 65)'}}>DETAILED REPORT:</h3>
      </Grid>
      
      <Grid className='hidemddown ' item xs={12} style={{marginRight:'80%',marginBottom:'20px'}}>
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
             
              
              const Grade = assignGrade(score);
              let gradecolor = assignGradeColor(Grade)
              let categorizeScore = (score) => {
                if (score < 30) {
                  return {categ:'Bad', Icon:<Dislikesvg style={{fill:gradecolor,...container.Icons}}/>};
                } else if (score <= 70) {
                  return {categ:'Average', Icon:<Averagesvg style={{fill:gradecolor,...container.Icons}}/>};
                } else {
                  return {categ:'Good',Icon:<GppGoodIcon style={{color:gradecolor,...container.Icons}}/>};
                }
              }
              const categScore = categorizeScore(score);
             const chromeStatus = (score) => {
                if (score>0 && score < 30) {
                  return <CheckIcon style={{color:'red'}}/>;
                } 
                else if (score === 0){
                  return <ClearIcon style={{color:'red'}}/>;
                }else if (score <= 70) {
                  return <CheckIcon style={{color:'green'}}/>;
                } else {
                  return <DoneAllIcon style={{color:'green'}}/>;
                }
             }

             const statusIcon = chromeStatus(score);
              let tableData = [

                {
                  icon: categScore.Icon,
                  key: <p className='keyhead'>Score: </p>,
                  score: <p className='valuehead'>{score}</p>,
                },
                {
                  icon: <div>{statusIcon}</div>,
                  key: <p className='keyhead'>Browser: </p>,
                  score: <div className='valuehead'><img src={chromePng}  alt='chrome' style={{height:'20px', width:'20px'}}/></div>,
                },
                {
                  icon: <Gradesvg style={{fill:'rgb(3, 63, 99)',...container.Icons}}/>,
                  key: <p className='keyhead'>Grade: </p>,
                  score: <p className='valuehead' style={{color:gradecolor}}>{Grade}</p>,
                },
              ];

              
              let columnName = "";
              let columnsData = [{"name":'',"title":''}]
              switch(true){
                case key === "Performance":
                  columnName = "performancescore"
                  columnsData[0].name = columnName
                  columnsData[0].title = <p className='TableHeaderDev'>{key}</p>
                 
                  break
                case key === "Accessibility":
                  columnName = "accessibility"
                  columnsData[0].name = columnName
                  columnsData[0].title = <p className='TableHeaderDev'>{key}</p>
                 
                  break;
                case key === "Seo":
                  columnName = "seo"
                  columnsData[0].name = columnName
                  columnsData[0].title = <p className='TableHeaderDev'>{key}</p>
                 
                  break;
                case key === "BestPractices":
                  columnName = "bestPratices"
                  columnsData[0].name = columnName
                  columnsData[0].title = <p className='TableHeaderDev'>{key}</p>
                 
                  break;
                case key === 'Pwa':
                  columnName = "pwa"
                  columnsData[0].name = columnName
                  columnsData[0].title = <div className ='TableHeaderDev'><p>{key}</p><TooltipInfo
                  title={
                    <React.Fragment>
                      <Typography color="inherit">Progressive Web Application</Typography>
                       <b>{"is a modern web application that delivers a native app-like experience.It offers features like offline access , push notifications and fastloading"}</b>
                    </React.Fragment>
                  }
                >
                  <img src={infoPng} alt='info' style={{width:'20px', height:'18px'}}/>
                </TooltipInfo></div>
                  
                  break;
              }

               
              
            
              
              let rows = tableData.map((data) => ({
                [columnName]: (
                  <div className='inRow' style={{ margin: '0px',padding:'0px', display:'flex', direction:'row',justifyContent:'start', }}>
             
                    <div style={{display:'inline-flex'}}>{data.icon}</div>
                    <div style={{display:'inline-flex'}}>{data.key}</div>
                    <div style={{display:'inline-flex'}}>{data.score}</div>
                  
                  </div>
                ),
              }));
               
              return (
                            <Grid key={key} item xs={12} md={2} className='Detailitemcard' style={container.GridClass}>
                            <div class="circle" style={performance.s1}>
                            <div class="inner">{score}</div>
                        </div> 
                        {/* <Grid className='ParentIconContainer' item  > */}

                        <DataGrid
                           rows={rows}
                           columns={columnsData}
                                    > 
                        <Table 
                        rowComponent={TableRowCustom}
                        headerCellComponent={TableHeaderCellComponent}
                        />
                        <TableColumnResizing  />
                       <TableHeaderRow />
                        </DataGrid>
                        {/* </Grid> */}
                        
                        
                        </Grid>
                   
             )}            
             )}
    </Grid>
  )
}

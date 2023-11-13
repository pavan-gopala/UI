import { Grid, Hidden, IconButton,Button } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/styles.css'
import shieldimage from '../Images/shield_check.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showDialog, showloginstatus } from '../redux/EmailValidation/validation';
import { showregistration } from '../redux/EmailValidation/validation';

export const Homepage = () => {
  const dispatch = useDispatch();
  const loginstatus = useSelector((state)=> state.mailvalidation.loginstatus)
  const showdialog = useSelector((state)=>state.mailvalidation.showDialog)
  const showregis= useSelector((state)=>state.mailvalidation.showregistration)

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
 


 
  const handleClickOpen = () => {
    setOpen(true);
  };
 

  const handleClose = () => {
     dispatch(showDialog(false))
  };
  const handleregisterClose = () => { 
     dispatch(showregistration(false))
  }
  const handlesignin = () => {
    dispatch(showDialog(false))
      navigate('/register')
  }
 const handleloginstatusClose = ()=>{
     dispatch(showloginstatus(false))
 }
 
  return (
    <Grid container className='HomepageContainer'>
      <Grid item xs={12} sm={6} className='GridHome' >
      <Dialog open={showdialog} onClose={handleClose}>
          <DialogTitle>{"Important Note"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              currently we are not accepting Toolrequest from users.
            </DialogContentText>
            <DialogContentText sx={{color:'primary.main', fontSize:16, fontWeight:900}}>
              we are going to launch  new program.Every time you use our tool you're going to get paid for it.
              <Button>Limited to first 10,000 registered users only</Button>
            </DialogContentText>

          </DialogContent>
          <DialogActions sx={{margin:'auto'}}>
            <Button variant='outlined' onClick={handlesignin}>Intrested</Button>
            <Button variant='contained' onClick={handleClose}>Remind me later</Button>
          </DialogActions>
         
        </Dialog>
        <Dialog open={showregis} onClose={handleregisterClose}>
          <DialogTitle>{"Congratulations"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
               Yor are successfully registered.
            </DialogContentText>
            <DialogContentText sx={{color:'primary.main', fontSize:16, fontWeight:500}}>
              we will send an email once we launch our get paid per use program.
              or you can check our website for updates.
            </DialogContentText>

          </DialogContent>
          <DialogActions sx={{margin:'auto'}}>
            
            <Button variant='contained' sx={{borderRadius:0}} onClick={handleregisterClose}>close</Button>
          </DialogActions>
         
        </Dialog>
        <Dialog open={loginstatus} onClose={handleloginstatusClose}>
          <DialogTitle>{"Congratulations"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
               Yor are successfully logged.
            </DialogContentText>
            <DialogContentText sx={{color:'primary.main', fontSize:16, fontWeight:500}}>
              More Tools will come soon.
            </DialogContentText>

          </DialogContent>
          <DialogActions sx={{margin:'auto'}}>
            
            <Button variant='contained' sx={{borderRadius:0}} onClick={handleloginstatusClose}>close</Button>
          </DialogActions>
         
        </Dialog>
            <h4> AI-powered data validation tools that are easy to use <span className='homepagespan'>free</span> and <span className='homepagespan'>affordable</span> provide real-time results. </h4>
          <Hidden mdDown={true}>
          <p>Our AI-powered data validation tools can help you improve the accuracy and reliability of your data, which can lead to better decision-making, increased efficiency, and reduced risk.

         Our tools are easy to use and deploy, even for users with no prior experience with AI. They are also affordable for businesses of all sizes, and they offer a variety of features that can help you improve the quality of your data.

         Our tools provide real-time results so that you can quickly identify and fix any errors. They are also highly accurate and able to identify even the most subtle errors in your data.

         If you are looking for an easy-to-use, affordable, and accurate AI-powered data validation tool, then you should consider our tools.</p>
         <span className='homepagespan1'>check tools in menu <IconButton sx={{color:'black'}}><ArrowRightAltIcon/></IconButton></span>
          </Hidden>
           </Grid>

      <Grid item xs={10} sm={6} className='GridImage' sx={{justifyContent:'center', alignItems:'center', margin:'auto'}} >
      <div className="shield-container">
          <img src={shieldimage} alt="Shield Check" className="shield-image" />
          
        </div></Grid>
         <Hidden mdUp={true}> <Grid item xs={10} sm={6} sx={{margin:'auto'}} className='GridHome'>
          <p>Our AI-powered data validation tools can help you improve the accuracy and reliability of your data, which can lead to better decision-making, increased efficiency, and reduced risk.

        Our tools are easy to use and deploy, even for users with no prior experience with AI. They are also affordable for businesses of all sizes, and they offer a variety of features that can help you improve the quality of your data.

        Our tools provide real-time results so that you can quickly identify and fix any errors. They are also highly accurate and able to identify even the most subtle errors in your data.

        If you are looking for an easy-to-use, affordable, and accurate AI-powered data validation tool, then you should consider our tools.</p>
        <span className='homepagespan1'>check tools in menu <IconButton sx={{color:'black'}}><ArrowRightAltIcon/></IconButton></span>
          </Grid></Hidden>
    </Grid>
 
  )
}

import React from 'react'
import {  Grid, Hidden, Stack, Typography, useTheme, Box, } from '@mui/material'
import { Toolsmenu } from '../subpages/Nav/ToolMenu';
import { HomeNavlink, Loginlink, PaddingButton, Registerlink } from '../subpages/Nav/HomeNavlink';
import { SmallDevicesMenu } from '../subpages/Nav/mobiledevices/smallDevicesMenu';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton } from '../subpages/Nav/HomeNavlink';  
import { setlogin, setregister } from '../../../redux/EmailValidation/validation';
import { Link } from 'react-router-dom';
import "../../../styles/navbar.css";
import { useState } from 'react';
import {ReactComponent as SvgMainIcon} from "../../../Images/webpagelogo.svg";
import { green } from '@mui/material/colors';
 


const classes = {
  svgIcon: {
    fill : "rgb(233,72,69)",
    height:'50px',
    width:'130px',
    
  },
  Griditem: {
    padding: "3.5%",
  },
};

export const Navbar = () => {
  
    const theme = useTheme();
    const dispatch  = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const logged = useSelector((state)=>state.mailvalidation.login)
    React.useEffect(()=>{
      if(document.cookie.includes('jwt')){
        dispatch(setlogin(true))
      }else{dispatch(setlogin(false))}
    })
  return (
    
    // <div style={{backgroundColor: green, position: 'sticky', top: 0, zIndex: 1000, margin: 0, padding: 4, display:'block',}}>
      
      <nav id="mainNavbar" className="navbar navbar-dark bg-info fixed-top navbar-expand-md snipcss-jbp1y">
      <div className="container">
        <div className="container-fluid">
          <Link to="/" target="_self" className="navbar-brand">
            <div style={{display:'flex', flexDirection:'row'}}>
             <SvgMainIcon style={classes.svgIcon}/>
               <div style={{display:'flex', flexDirection:'column'}}>
                <p></p>
               </div>
              
             </div>

          </Link>
          <button 
            type="button" 
            aria-label="Toggle navigation" 
            className="navbar-toggler collapsed style-zWt8l" 
            aria-expanded="false" 
            aria-controls="nav-collapse" 
            id="style-zWt8l"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#666666" xmlns="http://www.w3.org/2000/svg" className="bi bi-chevron-bar-down">
          <path fill-rule="evenodd" d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z">
          </path>
        </svg>
          </button>
          <div  id='nav-collapse'  className={`navbar-collapse collapse  ${isOpen ? 'show' : 'hide'}`} align="end">
          
            <ul className="navbar-nav ml-auto" >
           {!logged && <li className="nav-item uppercase">
            <a href="/login" target="_self" className="nav-link ">
              Login
            </a>
          </li>}
          {/* <li className="nav-item uppercase">
            <a href="/pricing" target="_self" className="nav-link">
              Pricing
            </a>
          </li> */}
          {!logged && <li className="nav-item uppercase font-weight-bold">
            <a href="/register" target="_self" className="nav-link ">
              Register for free
            </a>
          </li>}
          {logged && <li className="nav-item uppercase font-weight-bold">
            <a href="/logout" target="_self" className="nav-link">
              Logout
              </a>
              </li>}
            </ul>
          </div>
          </div>
        
      </div>
    </nav>
    

//       {/* <div style={{backgroundColor: theme.palette.secondary.main, position: 'relative',  display:'block'}} >
//       <div style={{display: 'inline-block', marginRight:'40%'}}>
//   <Link to="/" style={{backgroundColor:'transparent',border:'0px', color:'green'}} className='navbutton'>
//     Website performance check
//   </Link>
// </div> <Hidden mdDown={true}>
//     <div style={{display: 'inline-block',marginLeft:'8%'}}>
//       <Toolsmenu />
//     </div>
//   </Hidden>
           
//   <div style={{display: 'inline-block', float: 'right', marginRight: '2%'}}>
//     <Hidden mdDown={true}>
     
//       {logged &&<div style={{display:'inline-block'}}>
//             <LogoutButton/>
//       </div> }
//        {!logged&&<div style={{display:'inline-flex', cursor:'pointer'}} >
//           <Registerlink/>
//           <Loginlink/>
//           </div>}

      
//     </Hidden>
//   </div>
//      <div style={{display:'inline-block'}}>
//      <SmallDevicesMenu/>
//      </div>
// </div> */}
// </div>
      
 
  )
}
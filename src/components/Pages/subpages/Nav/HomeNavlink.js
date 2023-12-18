import React from 'react'
import { Button,Box, IconButton } from '@mui/material'
import { Home, LoginSharp, Logout } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setlogin, setregister } from '../../../../redux/EmailValidation/validation';
import '../../../../styles/styles.css';
import { Link } from 'react-router-dom';

export const HomeNavlink = () => {
  return (
                <Link to='/'  style={{textDecoration:'none'}}><span style={{color:'gray',display:'inline-block',   position:'absolute', bottom:'100%',  left:'80%', }}>Home</span></Link>   
    )
}
export const Registerlink = ({handleclose}) => {
  return (
          <Link to='/register' className='navauth' style={{textDecoration:'none',textAlign:'center',}}><button className='navbutton'>Register</button></Link>
  )
}

export const Loginlink = ({handleclose}) => {
  return (
    <Link to='/login' className='navauth' style={{textDecoration:'none'}}>
        <button className='navbutton' style={{border:'0px', backgroundColor:'transparent'}} >Login?</button>
    </Link>
  )
   
}

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const handlelogout = () => {
    if (document.cookie.includes('jwt')) {
      dispatch(setlogin(false));
      dispatch(setregister(''));
    } else {
      dispatch(setlogin(true));
      
    }
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
   
  }
  return (
          
    <a onClick={handlelogout} href='/' className='navauth' style={{textDecoration:'none',}}><button className='navbutton' style={{backgroundColor:'gray', border:'0px'}}>Logout</button></a>
      
  )
}

export const PaddingButton = () => {
  return (
           <Box sx={{margin:'auto', paddingRight:2.5 }}>
          </Box>
  )
}


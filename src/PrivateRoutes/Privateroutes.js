import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../components/Pages/subpages/Loader';
import { Popover, Stack, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as  LoginRequireSvg} from '../Images/loginrequire.svg'

export const PrivateRoute = ({ children }) => {
  const [open, setopen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/user/protected', { withCredentials: true })
      .then(res => {
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsAuthenticated(false);
      });
  }, []);
   
  return isAuthenticated ? children :<Stack minHeight={'91vh'} marginTop={'13vh'}><Box >
         < LoginRequireSvg style={{width:'65vw', height:'45vh'}}/>
         <h4>Login required to access this tool</h4>
         <p>click here <Button sx={{borderRadius:0}} variant='contained' onClick={()=>navigate('/login')}>Login</Button></p>
    </Box></Stack>;
};
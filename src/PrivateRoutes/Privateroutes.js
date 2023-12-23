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
    axios.get('https://www.validate24x7.com/user/protected', { withCredentials: true })
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
};import { useState, useEffect } from 'react';
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
    axios.get('https://www.validate24x7.com/user/protected', { withCredentials: true })
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
}; <footer class="pt-5 snipcss-faZKt">
  <div class="container-fluid style-12oHw" id="style-12oHw">
    <div class="row text-center">
      <div class="col">
        <span class="text-accent text-small text-uppercase">
          Domain Price Check is a service provided by
        </span>
      </div>
    </div>
    <div class="row">
      <div class="text-center pb-2 col">
        <img src="https://pc.domains/_nuxt/img/internetx-logo.f35a8e5.svg" width="110">
      </div>
    </div>
    <div class="row text-center pt-3">
      <div class="col">
        <a href="https://www.internetx.com/en/internetx/contact/" target="_blank" class="text-accent text-small mr-3">
          Contact
        </a>
        <a href="https://www.internetx.com/en/legal/privacy-policy/" target="_blank" class="text-accent text-small mr-3">
          Privacy Policy
        </a>
        <a href="https://www.internetx.com/en/legal/terms-and-conditions/" target="_blank" class="text-accent text-small mr-3">
          Terms of Use
        </a>
        <a href="https://www.internetx.com/en/legal/imprint/" target="_blank" class="text-accent text-small">
          Imprint
        </a>
      </div>
    </div>
  </div>
</footer>@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800,300i,400i,500i,600i,700i,800i&display=swap'); 
  body {  
    color:#212529;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size:1rem;
    font-weight:400;
    line-height:1.5;
    text-align:left;
    word-spacing:1px;
  }  
* { 
    box-sizing: border-box;
} 

* { 
    box-sizing: border-box; 
    margin: 0;
} 

body { 
    background-color: #fff; 
    color: #212529; 
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; 
    font-size: 1rem; 
    font-weight: 400; 
    line-height: 1.5; 
    margin: 0; 
    text-align: left;
} 

body { 
    background-color: #f9f9f9; 
    color: #333; 
    font-family: "Open Sans"; 
    font-size: 14px;
} 

html { 
    -webkit-text-size-adjust: 100%; 
    -webkit-tap-highlight-color: rgba(0,0,0,0); 
    font-family: sans-serif; 
    line-height: 1.15;
} 

html { 
    -ms-text-size-adjust: 100%; 
    -webkit-text-size-adjust: 100%; 
    -moz-osx-font-smoothing: grayscale; 
    -webkit-font-smoothing: antialiased; 
    box-sizing: border-box; 
    word-spacing: 1px;
} 

footer { 
    display: block;
} 

footer { 
    background-color: #efefef;
} 

.pt-5 { 
    padding-top: 3rem!important;
} 

*,:after,:before { 
    box-sizing: border-box;
} 

*,:after,:before { 
    box-sizing: border-box; 
    margin: 0;
} 

.container-fluid { 
    margin-left: auto; 
    margin-right: auto; 
    padding-left: 15px; 
    padding-right: 15px; 
    width: 100%;
} 

.row { 
    display: flex; 
    flex-wrap: wrap; 
    margin-left: -15px; 
    margin-right: -15px;
} 

.text-center { 
    text-align: center!important;
} 

.pt-3 { 
    padding-top: 1rem!important;
} 

.col { 
    padding-left: 15px; 
    padding-right: 15px; 
    position: relative; 
    width: 100%;
} 

.col { 
    flex-basis: 0; 
    flex-grow: 1; 
    max-width: 100%;
} 

.pb-2 { 
    padding-bottom: .5rem!important;
} 

.text-uppercase { 
    text-transform: uppercase!important;
} 

.text-accent { 
    color: #888;
} 

.text-small { 
    font-size: 10px;
} 

img { 
    border-style: none;
} 

img { 
    vertical-align: middle;
} 

a { 
    background-color: transparent; 
    color: #007bff; 
    -webkit-text-decoration: none; 
    text-decoration: none;
} 

a { 
    color: #3490dc; 
    cursor: pointer;
} 

.mr-3 { 
    margin-right: 1rem!important;
} 

a:hover { 
    color: #0056b3; 
    -webkit-text-decoration: underline; 
    text-decoration: underline;
} 

a:hover { 
    color: #f44300;
} 


/* These were inline style tags. Uses id+class to override almost everything */
#style-12oHw.style-12oHw {  
   padding-bottom: 50px;  
}  

  


import './App.css';
import theme from './Theme';
import { ThemeProvider } from '@mui/material';
import { Homepage } from './components/homepage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Aboutus } from './components/Pages/MainPages/Aboutus';
import { Footer } from './components/Pages/MainPages/Footer';
import { Navbar } from './components/Pages/MainPages/Navbar';
import { Bulkvalidation } from './components/Pages/MainPages/bulkvalidation';
import {Grid} from '@mui/material';
import { EmailDescription } from './components/Pages/MainPages/Description';
import {Box} from '@mui/material';
import { Mxrecordslookup } from './components/Pages/subpages/mxrecords/mxrecordslookup';
import { SiteInfo } from './components/Pages/subpages/siteinfoscanner/SiteInfo';
import { Newtoolrequest } from './components/Pages/subpages/Requests/Newtoolrequest';
import { Register } from './components/Authentication/Register';
import { Login } from './components/Authentication/Login';
import { PrivateRoute } from './PrivateRoutes/Privateroutes';
import { Notfound } from './components/Pages/subpages/Notfound';
import { setlogin } from './redux/EmailValidation/validation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const PageWrapper = ({ children }) => {
  const dispatch = useDispatch();
   useEffect(()=>{
    if(document.cookie.includes('jwt')){
      dispatch(setlogin(true))
    }else{
      dispatch(setlogin(false))
    }
   })
  return (
    <div style={{ marginTop: '9vh', minHeight:'91vh' }}>
      
      {children}
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar/>
          
          <Routes>
           
            <Route path='/' element={<PageWrapper><Homepage/></PageWrapper>}/>
            {/* <Route path='/emailvalidation' element ={<PrivateRoute><PageWrapper><EmailDescription/></PageWrapper></PrivateRoute>}/> */}
            <Route path='/mxrecordslookup' element={<PageWrapper><Mxrecordslookup/></PageWrapper>}/>
            <Route path='/site/serverInfocheck' element={<PageWrapper><SiteInfo/></PageWrapper>}/>
            <Route path='/register' element={<PageWrapper><Register/></PageWrapper>}/>
            <Route path='/login' element={<PageWrapper><Login/></PageWrapper>}/>
            <Route path='*' element={<PageWrapper><Notfound/></PageWrapper>}/>
          </Routes>
          <Grid container sx={{width:'100%', alignItems:'center', justifyContent:'center',}}>
      <Grid item xs={12}>
    <Footer/>
      </Grid>
    </Grid>
        </Router>
      </ThemeProvider>
     
    </div>
  );
}

export default App;

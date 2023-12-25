
import './App.css';
import theme from './Theme';
import { Hidden, ThemeProvider } from '@mui/material';
import { Homepage } from './components/homepage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Footer } from './components/Pages/MainPages/Footer';
import { Navbar } from './components/Pages/MainPages/Navbar';
import {Grid} from '@mui/material';
import { Newtoolrequest } from './components/Pages/subpages/Requests/Newtoolrequest';
import { Register } from './components/Authentication/Register';
import { Login } from './components/Authentication/Login';
import { PrivateRoute } from './PrivateRoutes/Privateroutes';
import { Notfound } from './components/Pages/subpages/Notfound';
import { setlogin, setshowvalidation } from './redux/EmailValidation/validation';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ImportantNote } from './components/Pages/MainPages/ImportantNote';
import { Toolcomponentcombiner } from './components/Pages/subpages/portcheck/Toolcomponentcombiner.react.js';
import { Websiteperformanccheck } from './components/loader/Websiteperformanccheck.loader.js';
import { PerformanceBar } from './components/Pages/subpages/websiteperformancecheck/charts/performance.bar.js';
import { useLocation } from 'react-router-dom';
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
    <div style={{ marginTop: '2vh', minHeight:'91vh' }}>
      
      {children}
    </div>
  );
}




function App() {
  const toolname = useSelector((state) => state.mailvalidation.toolname);
  const loading = useSelector((state) => state.mailvalidation.isLoading);
  const showvalidation = useSelector((state) => state.mailvalidation.showvalidation);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      {loading && toolname === 'webcheck'&&<Websiteperformanccheck/>}
        <Router>
         {window.location.pathname !== '/performancecheck' && <Navbar/>}
          
          <Routes>
           
            <Route path='/k' element={<PageWrapper><Homepage/></PageWrapper>}/>
            {/* <Route path='/emailvalidation' element ={<PrivateRoute><PageWrapper><EmailDescription/></PageWrapper></PrivateRoute>}/> */}
            <Route path='/mxrecordslookup' element={<Toolcomponentcombiner/>}/>
            <Route path='/site/serverInfocheck' element={<Toolcomponentcombiner/>}/>
            <Route path='/register' element={<PageWrapper><Register/></PageWrapper>}/>
            <Route path='/login' element={<PageWrapper><Login/></PageWrapper>}/>
            <Route path='*' element={<PageWrapper><Notfound/></PageWrapper>}/>
            <Route path='/portavailabilitycheck' element={<PageWrapper><Toolcomponentcombiner/></PageWrapper>}/>
            <Route path='/' element={<Toolcomponentcombiner/>} />
           {showvalidation&& <Route path='/performancecheck' element={<PageWrapper><PerformanceBar/></PageWrapper>}/>}
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

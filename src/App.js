
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/emailvalidation' element ={<EmailDescription/>}/>
            <Route path='/mxrecordslookup' element={<Mxrecordslookup/>}/>
            <Route path='/site/serverInfocheck' element={<SiteInfo/>}/>
            <Route path='/toolrequest' element={<Newtoolrequest/>}/>
          </Routes>
          <Grid container sx={{width:'100%', alignItems:'center', justifyContent:'center', marginTop:'10vh'}}>
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

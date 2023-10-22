import React from 'react'
import { Navbar } from './Pages/MainPages/Navbar'
import { Description } from './Pages/MainPages/Description'
import { useTracking } from 'react-tracking'
import { initGA, logPageView } from '../googleanalytics'


export const Homepage = () => {
    
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  const { trackEvent } = useTracking();

  return (
    <div style={{width:'100%'}}><Navbar/>
    <Description/>
    
    </div>
  )
}

import React from 'react'
import { Navbar } from './Pages/MainPages/Navbar'
import { Description } from './Pages/MainPages/Description'
import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'


export const Homepage = () => {

 
  useEffect(() => {
    mixpanel.init('43bbf336f889d2d66414c8ff11e6e6fa', { debug: true, track_pageview: true, persistence: 'localStorage' });
  }, []);
 

  return (
    <div style={{width:'100%'}}><Navbar/>
    <Description/>
    
    </div>
  )
}

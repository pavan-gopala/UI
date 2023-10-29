import React from 'react'
import { AboutusComponent } from '../../../styles/styles'
import '../../../styles/styles.css'

export const Aboutus = () => {
  return (
     <AboutusComponent>
        <h4>Why Choose Validate24x7:</h4>
        <ul>
         
            <li><span className='spanelement'>Precision and Speed:</span>Our cutting-edge technology ensures that every email address is meticulously examined
             for accuracy and legitimacy. Say goodbye to bounce-backs and undeliverable emails.</li><br/>

            <li><span className='spanelement'>Data Privacy and Security:</span>We understand the importance of safeguarding your data. Your privacy is our priority, 
            and we maintain the highest standards of data security and compliance.</li><br/>
        </ul>
     </AboutusComponent>
  )
}

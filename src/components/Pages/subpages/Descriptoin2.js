import React from 'react';
import { DescriptionComponent2 } from '../../../styles/styles';
import { Typography } from '@mui/material';

export const Description2 = () => {
  return (
    <DescriptionComponent2 textAlign={'left'}>
        <Typography fontSize={15}  fontWeight={'bold'} color={'#BDD892'}>The Significance of Email Validation:</Typography>
        <p style={{fontWeight:'normal',fontFamily:'monospace'}}>Email validation is your shield against bounced emails and missed opportunities. It guarantees that the email addresses you collect are real and reachable, boosting your 
          communication's effectiveness. Keep your contact lists accurate, improve your email marketing, and protect your inbox from unwanted spam and fraud.</p>  
    </DescriptionComponent2>
  )
}

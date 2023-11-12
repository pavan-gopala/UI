import { Typography,Box,Button } from '@mui/material'
import React from 'react'

export const Notfound = () => {
    const handlenavigate=()=>{
        window.location.href='/'
    }
  return (
     <Box sx={{marginTop:18}}>
           <Typography variant='h6'>Not Found please check url <br/> or <br/> <Button onClick={handlenavigate} variant='contained'>Back to homepage</Button></Typography>
     </Box>
  )
}

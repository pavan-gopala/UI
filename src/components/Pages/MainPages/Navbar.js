import React from 'react'
import { Button,Grid, Stack, Typography, useTheme } from '@mui/material'
import { Toolbarcomponent } from '../../../styles/styles';

export const Navbar = () => {
    const theme = useTheme();
   
  return (
    <Grid container position={'fixed'}>
        <Grid item xs={12}>
    <Toolbarcomponent >
        <Typography fontSize={'large'} fontWeight={'bold'} color={theme.palette.primary.main}  flexGrow={1}>Validate24x7</Typography>
         <Stack spacing={1} direction={'row'}>
            <Button>Overview</Button>
            <Button sx={{color:theme.palette.secondary.main}}>Beta version</Button>
         </Stack>
    </Toolbarcomponent>
    </Grid>
    </Grid>
  )
}

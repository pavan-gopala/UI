import { Stack,Button,Typography,TextField, Grid,Snackbar,Alert } from '@mui/material'
import '../../../../styles/styles.css';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';



const validationSchema = Yup.object({
  toolName: Yup.string().required('Tool Name is required'),
  toolDescription: Yup.string().required('Tool Description is required'),
  toolCategory: Yup.string().required('Tool Category is required'),
});
export const Newtoolrequest = () => {
    const [open, setOpen] = useState(false);
    const [disable, setdisable] = useState(false);
    const formik = useFormik({
        initialValues: {
          toolName: '',
          toolDescription: '',
          toolCategory: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          setdisable(true)
          setTimeout(() => {
          formik.resetForm();
          setdisable(false)
          setOpen(true);
  }, 5000);
        },
      });

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    return (
    <Grid container sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '10vh' }}>
      <Grid item lg={6} xs={10}>
        <Stack spacing={4}>
          <Typography  variant="h4">Validation Tool Request</Typography>
          <form style={{textAlign:'left'}}  onSubmit={formik.handleSubmit}>
            <Stack spacing={0}>
            <p style={{fontFamily:'Peppins'}}>Tool Name*</p>
            <TextField
            className='myTextField'
              variant="outlined"
              fullWidth
              id="toolName"
              name="toolName"
              value={formik.values.toolName}
              onChange={formik.handleChange}
              error={formik.touched.toolName && Boolean(formik.errors.toolName)}
              helperText={formik.touched.toolName && formik.errors.toolName}
            />
           <p style={{fontFamily:'Peppins'}}>Tool Description*</p>
    <TextField
    className='myTextField'
    variant="outlined"
    fullWidth
    id="toolDescription"
    name="toolDescription"
    value={formik.values.toolDescription}
    onChange={formik.handleChange}
    error={formik.touched.toolDescription && Boolean(formik.errors.toolDescription)}
    helperText={formik.touched.toolDescription && formik.errors.toolDescription}
  />
    <p style={{fontFamily:'Peppins'}}>Tool Category*</p>
  <TextField
  className='myTextField'
    variant="outlined"
    fullWidth
    id="toolCategory"
    name="toolCategory"
    value={formik.values.toolCategory}
    onChange={formik.handleChange}
    error={formik.touched.toolCategory && Boolean(formik.errors.toolCategory)}
    helperText={formik.touched.toolCategory && formik.errors.toolCategory}
  />
  <Button disabled={disable} sx={{width:'25%', marginTop:2}} variant="contained" color="primary" type="submit">Submit</Button>
  </Stack>
</form>
</Stack>
<Snackbar open={open} autoHideDuration={60000} onClose={handleClose} > 
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', }}>
          Form successfully submitted!
        </Alert>
      </Snackbar>
</Grid>
</Grid>
  )
}

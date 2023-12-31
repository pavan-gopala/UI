import React, { useEffect, useState } from 'react';
import { DescriptionComponent } from '../../../styles/styles';
import { Grid, Button, TextField } from '@mui/material';
import { Description2 } from '../subpages/Descriptoin2';
import { Formcomponent1 } from '../subpages/Formcomponent1';
import { Aboutus } from './Aboutus';
import { Footer } from './Footer';
import { ValidationTable } from '../subpages/ValidationTable';
import { Loader } from '../subpages/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { setshowvalidation } from '../../../redux/EmailValidation/validation';

export const EmailDescription = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.mailvalidation.isLoading);
  const showvalidation = useSelector((state) => state.mailvalidation.showvalidation);


  useEffect(() => {
    dispatch(setshowvalidation(false));
  }, []);
  return (
    <>
      <DescriptionComponent>
        <h2 style={{ padding: 15 , color:'primary.main'}}>Email validator</h2>
        <p style={{ paddingTop: 0, paddingLeft: 10, paddingRight: 10, paddingBottom: 40, }}>
          This tool will verify the validity of an email address and confirms whether it exists or not.The tool will
          connect with the email server,and confirms the validity of the email id that you entered.
        </p>
      </DescriptionComponent>
      <Grid container>
        <Grid item xs={11} sm={9} margin={'auto'}>
          <Formcomponent1 />
          {loading && <Loader />}
          {showvalidation && <ValidationTable />}
          <Description2 />
        </Grid>
      </Grid>
    </>
  );
};

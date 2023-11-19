// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00684A',
    },
    
    secondary: {
      main: '#1D252C',
    },
    blue:{
      main:'#0065A9',
      light:'#E7F0F6',
    },

    background: {
      default: '#F9FAFA',
      primary:'#1F4172',
    },
  },
  typography: {
    fontFamily: 'Peppins',
  },
  // Add more theme properties as needed
});

export default theme;
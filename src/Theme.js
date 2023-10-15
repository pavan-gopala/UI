// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BDD892',
    },
    secondary: {
      main: '#474747',
    },

    background: {
      default: '#FEFEFE',
    },
  },
  typography: {
    fontFamily: 'monospace',
  },
  // Add more theme properties as needed
});

export default theme;
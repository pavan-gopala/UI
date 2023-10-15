
import './App.css';
import theme from './Theme';
import { ThemeProvider } from '@mui/material';
import { Homepage } from './components/homepage';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Homepage/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;

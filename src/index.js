import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: 'Zen Loop',
  },
  palette: {
    primary: {
      main: '#2FBDBD',
      light: '#90DCD0',
      dark: '#0C9BBD',
    },
    secondary: {
      main: '#FFCE06',
      light: '#FFE625',
      dark: '#FFB700',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

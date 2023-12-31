import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './state/store.js';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '',
      },
    }),
  },
  colors: {
    brand: {
      100: 'rgba(255, 255, 255, 0.7)',
      200: 'rgba(240,242,241)',
    },
    primary: {
      100: 'rgb(84, 161, 205)',
    },
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    xxl: '1400',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

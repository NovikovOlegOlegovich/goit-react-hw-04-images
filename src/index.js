import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
// import './index.css';
import 'modern-normalize';

import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from './styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <App />
  </ThemeProvider>
);

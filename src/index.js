import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './components/login-page.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
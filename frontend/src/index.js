import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CookiesProvider } from "react-cookie";

// import axios from "axios";
// axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);

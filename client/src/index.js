import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to the app to function offline and be able to load faster, the user can change unregister()
// to register() below. Note this comes with some negative outcomes.
// To learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

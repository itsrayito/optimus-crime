import { StrictMode }  from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to the app to function offline and be able to load faster, the user can change unregister()
// to register() below. Note this comes with some negative outcomes.
// To learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

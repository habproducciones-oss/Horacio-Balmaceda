
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { logoBase64 } from './components/assets';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
if (favicon) {
  favicon.href = logoBase64;
  favicon.type = 'image/png';
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
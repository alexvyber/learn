import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Providers from './Providers';
import prepareInfrastructure from './prepareInfrastructure';

prepareInfrastructure();

const root = document.querySelector('#root');

if (!root) {
  throw new Error('No root element found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);

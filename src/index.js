import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { PokedexProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokedexProvider>
    <App />
  </PokedexProvider>
);

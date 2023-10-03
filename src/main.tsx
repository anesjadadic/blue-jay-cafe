import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ShoppingCartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShoppingCartProvider>
);

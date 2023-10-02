import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Shop from './Shop';
import Menu from './Menu';
import "./styles.css";
import { ShoppingCartProvider } from './context/ShoppingCartContext';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter ([
  {
    path: "*",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ShoppingCartProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ShoppingCartProvider>
);

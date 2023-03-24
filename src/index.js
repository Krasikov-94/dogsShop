import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout';
import { ErrorPage } from './components/ErrorPage';
import { StartPage } from './components/StartPage';
import { Sort } from './components/Sort';
import { Favorites } from './components/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'prod',
        element: <App />,
      },
      {
        path: 'sort',
        element: <Sort />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
  {
    path: '/start',
    element: <StartPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

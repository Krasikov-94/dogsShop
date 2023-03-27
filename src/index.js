import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout';
import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Pages/Home';
import { Sign } from './components/Pages/Sign';
import { SignUp } from './components/Pages/Sign/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'products',
        element: <App />,
      },
    ],
  },
  {
    path: 'signin',
    element: <Sign />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

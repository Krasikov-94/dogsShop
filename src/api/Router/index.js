import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../../components/ErrorPage';
import { CurrentProd } from '../../components/Pages/CurrentProduct';
import { Home } from '../../components/Pages/Home';
import { Products } from '../../components/Pages/Products';
import { SignIn } from '../../components/Pages/Sign/SignIn';
import { SignUp } from '../../components/Pages/Sign/SignUp';
import { Users } from '../../components/Pages/Users';
import { Layout } from '../../layout';
import { Basket } from '../../components/Pages/Basket';
import { Favorites } from '../../components/Pages/Favorites';
export const router = createBrowserRouter([
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
        element: <Products />,
      },
      {
        path: 'products/:currentProd',
        element: <CurrentProd />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'basket',
        element: <Basket />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
  {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
]);

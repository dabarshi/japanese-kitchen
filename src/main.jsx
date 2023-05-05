import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import SingleChef from './components/SingleChef.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-dabar-dabarshiroy-gmailcom.vercel.app/chefs')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><SingleChef></SingleChef></PrivateRoute>,
        loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-dabar-dabarshiroy-gmailcom.vercel.app/chefs/${params.id}`)
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../layout/Main';
import Blog from '../components/pages/Blog/Blog';
import Login from '../components/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element:<Login></Login>
        }
      ]
    },
  ]);


export default router;
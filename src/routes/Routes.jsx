import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Main from '../layout/Main';
import Blog from '../components/pages/Blog/Blog';
import Login from '../components/Login/Login';
import ViewRecipes from '../components/pages/ViewRecipies/ViewRecipes';
import Errorpage from '../components/pages/Errorpage/Errorpage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:() => fetch('https://chef-recepie-hunter-server-semon69.vercel.app/chefs'),
        },
        {
            path: '/chefs/:id',
            element:<ViewRecipes></ViewRecipes>,
            loader: ({params}) => fetch(`https://chef-recepie-hunter-server-semon69.vercel.app/chefs/${params.id}`)
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
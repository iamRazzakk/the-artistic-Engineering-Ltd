import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Main from './Components/Main/Main';
import Service from './Components/Service/Service';
import Product from './Components/Product/Product';
import Contact from './Components/Contact/Contact';
import Ourwork from './Components/Ourwork/Ourwork';
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
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/product',
        element: <Product></Product>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/ourwork',
        element: <Ourwork></Ourwork>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

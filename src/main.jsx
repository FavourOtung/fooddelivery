import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'

import './index.css'
import NotFoundPage from './Pages/NotFoundPage.jsx';
import FoodOrder from './Pages/FoodOrder.jsx';
import Sidemenu from './components/Sidemenu/Sidemenu.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/sidemenu',
    element: <Sidemenu />,
    children: [
      {
        path: '/sidemenu/:sideId',
        element: <FoodOrder/>
      }
    ]
  },
  {
    path: '/sidemenu/1',
    element: <App/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)

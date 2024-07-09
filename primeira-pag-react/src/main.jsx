import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import vehicles from './data/vehicles.js'
import VehicleView from './data/views/VehicleView.jsx'

/* Rotas para as paginas da APi percorrendo no array */
const routes = [
  {
    path: '/',
    element: <App />,
  },
];
vehicles.forEach((vehicle) => {
  routes.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle}/>
  })
})

const router = createBrowserRouter (routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
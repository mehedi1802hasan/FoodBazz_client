import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Firebase/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <HelmetProvider>
   <AuthProvider>
    <div className='max-w-screen-xl	mx-auto'>
    <RouterProvider router={router} />
    </div>    </AuthProvider>
    </HelmetProvider>

    
  </React.StrictMode>,
)

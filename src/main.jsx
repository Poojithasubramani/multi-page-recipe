import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import { RouterProvider } from 'react-router'
//import App from './App.jsx'
import AppRouter from './router/index.jsx';
import { FavoriteProvider } from './context/favoritecontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider>
          <RouterProvider router={AppRouter} />

    </FavoriteProvider>
  </StrictMode>,
)

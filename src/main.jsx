import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'

import Home from './pages/home'
import AuthorizationSignUp from './pages/authSignUp.jsx';
import AuthorizationLogin from './pages/authLogin.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/authorization/login',
    element: <AuthorizationLogin />,
  },
  {
    path: '/authorization/sign-up',
    element: <AuthorizationSignUp />,
  }
], {
  basename: import.meta.env.BASE_URL,
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AuthProvider } from './features/auth/auth.jsx'
import './index.css'

import Home from './pages/home'
import SignUp from './pages/signUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <div>Login Page</div>,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  }
], {
  basename: import.meta.env.BASE_URL,
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

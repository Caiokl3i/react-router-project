import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './routes/Profile.jsx'
import Register from './routes/Register/Register.jsx'
// Router imports

// Routes configurations
const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: 'profile',
    element: <Profile />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

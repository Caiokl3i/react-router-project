import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './routes/Register/Register.jsx'
import { ProfileList } from './routes/ProfileList/ProfileList.jsx'
// Router imports

// Routes configurations
const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/profilelist',
    element: <ProfileList />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

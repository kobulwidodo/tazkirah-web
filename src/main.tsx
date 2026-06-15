import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './components/PrivacyPolicy.tsx'
import Download from './components/Download.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/privacy', element: <PrivacyPolicy /> },
  { path: '/d', element: <Download /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import ContextApi from './Context/ContextApi.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
<ContextApi children={<RouterProvider router={Routes}></RouterProvider>}></ContextApi>
    </HelmetProvider>
  </StrictMode>,
)

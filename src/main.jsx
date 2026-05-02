import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TripView from './pages/TripView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TripView />
  </StrictMode>,
)

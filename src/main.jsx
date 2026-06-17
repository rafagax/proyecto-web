import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Mark that JS is active so scroll-reveal hidden states apply. Without this
// class (e.g. JS disabled/failed), `.reveal` content stays fully visible.
document.documentElement.classList.add('reveal-ready')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

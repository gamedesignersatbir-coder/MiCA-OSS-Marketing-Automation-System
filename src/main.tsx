import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// When VITE_FORCE_DEMO_MODE is set at build time, lock the deployment into
// demo-only mode (used by the public marketing/demo Netlify deploy). Re-applied
// on every page load so any localStorage tampering is reverted on next refresh.
if (import.meta.env.VITE_FORCE_DEMO_MODE === 'true') {
  localStorage.setItem('mica_demo_mode', 'true')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

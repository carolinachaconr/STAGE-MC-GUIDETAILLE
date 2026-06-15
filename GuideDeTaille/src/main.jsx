
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Guide from './Guide.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Guide />
//   </StrictMode>,
// )



createRoot(document.getElementById('react-product-page-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



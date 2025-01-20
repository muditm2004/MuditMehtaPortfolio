import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-photo-view/dist/react-photo-view.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />,
  // </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task from './task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseState from './Components/useState.jsx'
import UseEffect from './Components/useEffect.jsx'
import UseRef from './Components/useRef.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<>
<UseState />
<UseEffect />
<UseRef />
<App />
</>
)

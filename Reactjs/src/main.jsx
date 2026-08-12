import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'//importing the browser router from react router dom


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
     <App />
     {/* //wrapped the app into Browser Router to use the react router dom */}
    </BrowserRouter>
   

)

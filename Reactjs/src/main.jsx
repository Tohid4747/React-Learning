import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
// import { BrowserRouter } from 'react-router-dom'//importing the browser router from react router dom


// createRoot(document.getElementById('root')).render(

//     <BrowserRouter>
//      <App />
//      {/* //wrapped the app into Browser Router to use the react router dom */}
//     </BrowserRouter>

// )

createRoot(document.getElementById('root')).render(
   <UserContext>
   <App/>
   {/* //wrapped the usercontext around the app component to make the data availale to all 
    so now the app becomes the child of the usercontext */}
   </UserContext>

)


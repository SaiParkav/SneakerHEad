import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginSignup from './Sections/LoginSignup/LoginSignup.jsx'
import Payment from './Payment/Payment.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Payment />
 
  </React.StrictMode>,
)

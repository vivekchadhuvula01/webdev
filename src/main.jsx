import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Themeprovider } from './common/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Themeprovider>

    <App />
    </Themeprovider>
  </React.StrictMode>,
)

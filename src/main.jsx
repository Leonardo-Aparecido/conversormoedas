import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConversorDeMoedas from './components/relogio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConversorDeMoedas/>
  </React.StrictMode>,
)

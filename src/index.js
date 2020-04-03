import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GnomeProvider from './context/gnomeContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GnomeProvider>
      <App />
    </GnomeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

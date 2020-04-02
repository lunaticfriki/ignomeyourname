import React from 'react'
import { Router } from '@reach/router'
import Layout from './components/layout'
import Main from './components/main'
import About from './components/about'

import GnomeProvider from './context/gnomeContext'

function App() {
  return (
    <div className="App">
      <GnomeProvider>
        <Layout>
          <Router>
            <Main path="/" />
            <About path="/about" />
          </Router>
        </Layout>
      </GnomeProvider>
    </div>
  )
}

export default App

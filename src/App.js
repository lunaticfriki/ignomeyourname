import React from 'react'
import { Router } from '@reach/router'
import Layout from './components/layout'
import Searcher from './components/searcher'
import Main from './components/main'
import About from './components/about'

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Main path="/" />
          <About path="/about" />
        </Router>
      </Layout>
    </div>
  )
}

export default App

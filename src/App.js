import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { GnomeContext } from './context/gnomeContext'

import Layout from './components/layout'
import Main from './components/main'
import About from './components/about'

import Gallery from './components/gallery'

function App() {
  const { gnomes, gnome, setGnome } = useContext(GnomeContext)
  return (
    <div className="App">
      <Layout>
        <Router>
          <Main path="/" gnome={gnome} gnomes={gnomes} setGnome={setGnome} />
          <About path="/about" />
          <Gallery path="/gallery" gnome={gnome} gnomes={gnomes} setGnome={setGnome} />
        </Router>
      </Layout>
    </div>
  )
}

export default App

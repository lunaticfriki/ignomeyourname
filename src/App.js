import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { GnomeContext } from './context/gnomeContext'

import { AppContainer } from './styles/AppContainer'

import Layout from './components/layout'
import Main from './components/main'
import About from './components/about'
import Gallery from './components/gallery'

const App = () => {
  const { gnomes, gnome, setGnome, setGnomes } = useContext(GnomeContext)
  return (
    <AppContainer className="App">
      <Layout>
        <Router>
          <Main path="/" gnome={gnome} gnomes={gnomes} setGnome={setGnome} />
          <About path="/about" />
          <Gallery path="/gallery" gnome={gnome} gnomes={gnomes} setGnome={setGnome} setGnomes={setGnomes} />
        </Router>
      </Layout>
    </AppContainer>
  )
}

export default App

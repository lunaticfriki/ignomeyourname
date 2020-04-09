import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import { fetchGnomes } from './actions/creators/gnomesAction'
import store from './store'

import { AppContainer } from './styles/AppContainer'

import Layout from './components/layout'
import Main from './components/main'
import About from './components/about'
import Gallery from './components/gallery'

const App = () => {
  async function initialDispatch() {
    await store.dispatch(fetchGnomes())
  }
  useEffect(() => {
    initialDispatch()
  })
  return (
    <AppContainer className="App">
      <Provider store={store}>
        <Layout>
          <Router>
            <Main path="/" />
            <About path="/about" />
            <Gallery path="/gallery" />
          </Router>
        </Layout>
      </Provider>
    </AppContainer>
  )
}

export default App

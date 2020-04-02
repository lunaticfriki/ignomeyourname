import React from 'react'
import Layout from './components/layout'
import Searcher from './components/searcher'
import Main from './components/main'

function App() {
  return (
    <div className="App">
      <Layout>
        <Searcher />
        <Main />
      </Layout>
    </div>
  )
}

export default App

import React from 'react'

import { MainContainer } from '../styles/MainContainer'
import Searcher from './searcher'
import Info from './info'

const Main = () => {
  return (
    <MainContainer>
      <Searcher />
      <Info />
    </MainContainer>
  )
}

export default Main

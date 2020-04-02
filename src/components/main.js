import React from 'react'
import styled from 'styled-components'

import Searcher from './searcher'
import Info from './info'

const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: row;
`

const Main = () => {
  return (
    <MainContainer>
      <Searcher />
      <Info />
    </MainContainer>
  )
}

export default Main

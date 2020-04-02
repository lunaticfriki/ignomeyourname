import React from 'react'
import styled from 'styled-components'

import Searcher from './searcher'
import Info from './info'

const MainContainer = styled.div`
  grid-area: main;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

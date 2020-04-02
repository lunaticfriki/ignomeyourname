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
  fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      const data = myJson
      console.log(data)
    })
  return (
    <MainContainer>
      <Searcher />
      <Info />
    </MainContainer>
  )
}

export default Main

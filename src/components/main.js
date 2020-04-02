import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  grid-area: main;
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
  return <MainContainer>holi</MainContainer>
}

export default Main

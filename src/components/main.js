import React from 'react'

import { MainContainer } from '../styles/MainContainer'
import Searcher from './searcher'
import Info from './info'

const Main = ({ gnomes, gnome, setGnome }) => {
  return (
    <MainContainer>
      <Searcher gnomes={gnomes} gnome={gnome} setGnome={setGnome} />
      <Info gnomes={gnomes} gnome={gnome} />
    </MainContainer>
  )
}

export default Main

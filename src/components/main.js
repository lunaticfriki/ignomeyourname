import React, { useContext } from 'react'

import { GnomeContext } from '../context/gnomeContext'

import { MainContainer } from '../styles/MainContainer'
import Searcher from './searcher'
import Info from './info'

const Main = () => {
  const { gnomes, gnome, setGnome } = useContext(GnomeContext)
  return (
    <MainContainer>
      <Searcher gnomes={gnomes} gnome={gnome} setGnome={setGnome} />
      <Info gnomes={gnomes} gnome={gnome} />
    </MainContainer>
  )
}

export default Main

import React from 'react'
import PropTypes from 'prop-types'

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

Main.propTypes = {
  gnomes: PropTypes.array,
  gnome: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setGnome: PropTypes.func,
}

Main.defaultProps = {
  gnomes: [],
  gnome: '',
  setGnome: () => {},
}

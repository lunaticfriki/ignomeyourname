import React from 'react'
import PropTypes from 'prop-types'

import { SearcherContainer } from '../styles/SearcherContainer'
import useGnome from '../hooks/useGnome'
import { translations } from './constants'

const Searcher = ({ gnomes, setGnome }) => {
  const { sideSearcherSubmitButton, sideSearcherSelectTitle } = translations
  const [yourGnome, GnomeDropdown] = useGnome(sideSearcherSelectTitle, gnomes)

  const submitInfo = (e) => {
    e.preventDefault()
    setGnome(yourGnome)
  }
  return (
    <SearcherContainer>
      <form onSubmit={submitInfo}>
        <GnomeDropdown />
        <button>{sideSearcherSubmitButton}</button>
      </form>
    </SearcherContainer>
  )
}

export default Searcher

Searcher.propTypes = {
  gnomes: PropTypes.array,
  setGnome: PropTypes.func,
}

Searcher.defaultProps = {
  gnomes: [],
  setGnome: () => {},
}

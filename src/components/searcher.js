import React from 'react'
import PropTypes from 'prop-types'

import { SearcherContainer } from '../styles/SearcherContainer'
import useGnome from '../hooks/useGnome'
import { sideSearcherSubmitButton, sideSearcherSelectTitle } from './constants'

const Searcher = ({ gnomes, setGnome }) => {
  const [yourGnome, GnomeDropdown] = useGnome(sideSearcherSelectTitle, gnomes)

  return (
    <SearcherContainer>
      <form
        onSubmit={e => {
          e.preventDefault()
          setGnome(yourGnome)
        }}
      >
        <GnomeDropdown />
        <button>{sideSearcherSubmitButton}</button>
      </form>
    </SearcherContainer>
  )
}

export default Searcher

Searcher.propTypes = {
  gnomes: PropTypes.array
}

Searcher.defaultProps = {
  gnomes: []
}

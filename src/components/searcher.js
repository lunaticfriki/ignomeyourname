import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import useGnome from '../hooks/useGnome'
import { GnomeContext } from '../context/gnomeContext'

import {
  sideSearcherLabel,
  sideSearcherSubmitButton,
  sideSearcherPlaceholder,
  sideSearcherSelectTitle
} from './constants'

const SearcherContainer = styled.div`
  width: 40%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    label {
      padding: 1em;
    }
    .c-use-gnome {
      display: flex;
      flex-direction: column;
    }
    input,
    select {
      width: 20em;
      height: 3em;
      border: none;
      padding: 0.5em;
      margin-block-start: 0.5em;
    }
    button {
      align-self: center;
    }
  }
`

const Searcher = () => {
  const { gnomes } = useContext(GnomeContext)
  const [yourGnome, GnomeDropdown] = useGnome(sideSearcherSelectTitle, gnomes)
  const [gnome, setGnome] = useState('')
  return (
    <SearcherContainer>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log('hola')
        }}
      >
        <label htmlFor="gnome">
          <p>{sideSearcherLabel}</p>
          <input
            id="gnome"
            value={gnome}
            placeholder={sideSearcherPlaceholder}
            onChange={e => setGnome(e.target.value)}
          />
        </label>
        <GnomeDropdown />
        <button>{sideSearcherSubmitButton}</button>
      </form>
    </SearcherContainer>
  )
}

export default Searcher

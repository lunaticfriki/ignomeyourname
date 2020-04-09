import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setGnome, fetchGnomes } from '../actions/creators/gnomesAction'
import { SearcherContainer } from '../styles/SearcherContainer'
import useGnome from '../hooks/useGnome'
import { translations } from './constants'

const Searcher = () => {
  const gnomes = useSelector((state) => state.gnomesApi.gnomes.body)
  const dispatch = useDispatch()
  const { sideSearcherSubmitButton, sideSearcherSelectTitle } = translations
  const [yourGnome, GnomeDropdown] = useGnome(sideSearcherSelectTitle, gnomes)

  const submitInfo = (e) => {
    e.preventDefault()
    dispatch(setGnome(yourGnome))
  }

  useEffect(() => {
    dispatch(fetchGnomes())
  }, [dispatch, yourGnome])

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

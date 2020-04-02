import React from 'react'
import styled from 'styled-components'

import NavLink from './navLink'

const HeaderContainer = styled.div`
  width: 100vw;
  min-height: 7em;
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  nav {
    padding-block-start: 1em;
    display: flex;
  }
  li {
    align-self: flex-end;
    padding-inline-end: 1em;
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <h1>I GNOME YOUR NAME!</h1>
      </NavLink>
      <h2>Search your favorite gnome from Brastlewark!</h2>
      <nav>
        <NavLink to="/">
          <li>Searcher</li>
        </NavLink>
        <NavLink to="/about">
          <li>About me</li>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header

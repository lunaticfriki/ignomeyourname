import React from 'react'

import NavLink from './navLink'
import { HeaderContainer } from '../styles/HeaderContainer'

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

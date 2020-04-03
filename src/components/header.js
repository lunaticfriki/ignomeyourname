import React from 'react'

import NavLink from './navLink'
import { translations } from './constants'
import { HeaderContainer } from '../styles/HeaderContainer'

const Header = () => {
  const { headerTitle, headerSubtitle, navSearcher, navAbout, navGallery } = translations

  return (
    <HeaderContainer>
      <NavLink to="/">
        <h1>{headerTitle.toUpperCase()}</h1>
      </NavLink>
      <h2>{headerSubtitle}</h2>
      <nav>
        <NavLink to="/">
          <li>{navSearcher}</li>
        </NavLink>
        <NavLink to="/gallery">
          <li>{navGallery}</li>
        </NavLink>
        <NavLink to="/about">
          <li>{navAbout}</li>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header

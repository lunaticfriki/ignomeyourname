import React from 'react'
import styled from 'styled-components'

import { colors } from './colors'

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
  }
  li {
    align-self: flex-end;
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <h1>I GNOME YOUR NAME!</h1>
      <h2>Search your favorite gnome from Brastlewark!</h2>
      <nav>
        <li>About me</li>
      </nav>
    </HeaderContainer>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import Montserrat from '../assets/fonts/Montserrat-Regular.ttf'

import { colors } from './colors'

import Header from './header'
import Footer from './footer'

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 7em 1fr 5em;
  background-color: ${colors.genericDark};
  color: ${colors.genericLight};
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }
  font-family: 'Montserrat';
  h1 {
    font-size: 30px;
    line-height: 1.4;
    font-weight: normal;
    font-stretch: normal;
    color: ${colors.genericTitle};
  }
  h2 {
    font-size: 20px;
    line-height: 1.4;
    font-weight: normal;
    font-stretch: normal;
  }
  li {
    list-style: none;
    &:hover {
      color: ${colors.genericHover};
    }
  }
  a {
    color: ${colors.genericLight};
    text-decoration: none;
  }
  i {
    font-size: 12px;
  }
  button {
    width: 7em;
    height: 2em;
    background: ${colors.genericDark};
    color: ${colors.genericLight};
    border: 1px solid ${colors.genericHover};
    margin: 1em;
    cursor: pointer;
    &:hover {
      background: ${colors.genericHover};
      border: 1px solid ${colors.genericDark};
    }
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout

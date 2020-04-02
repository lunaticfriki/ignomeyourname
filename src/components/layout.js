import React from 'react'

import Header from './header'
import Footer from './footer'
import { LayoutContainer } from '../styles/LayoutContainer'

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

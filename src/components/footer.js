import React from 'react'

import { translations } from './constants'
import { FooterContainer } from '../styles/FooterContainer'

const Footer = () => {
  const { footerSignature, footerMessage, year } = translations

  return (
    <FooterContainer>
      <i>
        {`${footerSignature} 
        ${footerMessage} -
        ${year}`}
      </i>
    </FooterContainer>
  )
}

export default Footer

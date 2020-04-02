import React from 'react'

import { footerSignature, footerMessage, year } from './constants'
import { FooterContainer } from '../styles/FooterContainer'

const Footer = () => {
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

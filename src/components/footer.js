import React from 'react'
import styled from 'styled-components'

import { footerSignature, footerMessage } from './constants'

const FooterContainer = styled.div`
  width: 100vw;
  min-height: 5em;
  grid-area: footer;
  padding: 1em;
  display: flex;
  align-items: center;
`

const Footer = () => {
  const year = new Date().getFullYear()
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

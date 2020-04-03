import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { ModalInfoContainer } from '../styles/ModailInfoContainer'

const modalRoot = document.getElementById('modal')

const ModalInfo = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current)
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(<ModalInfoContainer>{children}</ModalInfoContainer>, elRef.current)
}

export default ModalInfo

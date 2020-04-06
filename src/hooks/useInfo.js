import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Info from '../components/info'
import ModalInfo from '../components/modalInfo'
import useOnClick from './useOnClick'

const useInfo = (gnomes, gnome, setGnome) => {
  const [showModal, setShowModal] = useState(false)

  const viewInfo = (id) => {
    setGnome(id)
    setShowModal(!showModal)
  }

  const Modal = () => {
    const ref = useRef()
    useOnClick(ref, () => setShowModal(false))
    return (
      <ModalInfo ref={ref}>
        <header>
          <button onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <section>
          <Info gnomes={gnomes} gnome={gnome.name} />
        </section>
      </ModalInfo>
    )
  }
  return { viewInfo, Modal, showModal }
}

export default useInfo

useInfo.propTypes = {
  gnomes: PropTypes.array,
  gnome: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setGnome: PropTypes.func,
}

useInfo.defaultProps = {
  gnomes: [],
  gnome: '',
  setGnome: () => {},
}

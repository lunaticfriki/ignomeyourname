import React, { useState, useRef } from 'react'

import { GalleryContainer } from '../styles/GalleryContainer'
import Info from './info'
import ModalInfo from './modalInfo'
import useOnClick from '../hooks/useOnClick'

const Gallery = ({ gnomes, gnome, setGnome }) => {
  const [showModal, setShowModal] = useState(false)
  const viewInfo = (id) => {
    setGnome(id)
    setShowModal(true)
  }
  const ref = useRef()
  useOnClick(ref, () => setShowModal(false))
  return (
    <GalleryContainer>
      <section>
        {gnomes.map((gn) => (
          <article key={gn.id} onClick={() => viewInfo(gn)}>
            <p>{gn.name}</p>
            <img src={gn.thumbnail} alt={gn.name} />
          </article>
        ))}
        {showModal && (
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
        )}
      </section>
    </GalleryContainer>
  )
}

export default Gallery

import React, { useState, useEffect, useRef } from 'react'

import { GalleryContainer } from '../styles/GalleryContainer'
import ModalInfo from './modalInfo'

const Gallery = ({ gnomes, gnome, setGnome }) => {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)
  const viewInfo = id => {
    setGnome(id)
    console.log(id)
    toggleModal()
  }
  const node = useRef()
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    toggleModal()
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })
  return (
    <GalleryContainer>
      <section ref={node}>
        {gnomes.map(gn => (
          <article key={gn.id} onClick={() => viewInfo(gn)}>
            <p>{gn.name}</p>
            <img src={gn.thumbnail} alt={gn.name} />
          </article>
        ))}
        {showModal && (
          <ModalInfo>
            <h1>holi</h1>
            <button onClick={toggleModal}>close</button>
          </ModalInfo>
        )}
      </section>
    </GalleryContainer>
  )
}

export default Gallery

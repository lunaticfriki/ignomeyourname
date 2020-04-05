import React, { useState, useRef } from 'react'

import { GalleryContainer } from '../styles/GalleryContainer'
import Info from './info'
import ModalInfo from './modalInfo'
import useOnClick from '../hooks/useOnClick'

const Gallery = ({ gnomes, gnome, setGnome }) => {
  const [imagesDisplayed, setImagesDisplayed] = useState(0)
  const [moreImages, setMoreImages] = useState(20)
  const [showModal, setShowModal] = useState(false)
  const viewInfo = (id) => {
    setGnome(id)
    setShowModal(true)
  }
  const previousImages = () => {
    setImagesDisplayed(imagesDisplayed - 20)
    setMoreImages(moreImages - 20)
    window.scrollTo(0, 0)
  }
  const showMoreImages = () => {
    setImagesDisplayed(imagesDisplayed + 20)
    setMoreImages(moreImages + 20)
    window.scrollTo(0, 0)
  }
  const ref = useRef()
  useOnClick(ref, () => setShowModal(false))
  return (
    <GalleryContainer>
      <div className="c-gallery-menu">
        {imagesDisplayed !== 0 && (
          <div>
            <button onClick={previousImages}>Show previous</button>
          </div>
        )}
        <div>
          <button onClick={showMoreImages}>Show more</button>
        </div>
      </div>
      <section>
        {gnomes.slice(imagesDisplayed, moreImages).map((gn) => (
          <article key={gn.id} onClick={() => viewInfo(gn)}>
            <p>{gn.name}</p>
            <div className="c-image">
              <img src={gn.thumbnail} alt={gn.name} />
            </div>
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
      <div className="c-gallery-menu">
        {imagesDisplayed !== 0 && (
          <div>
            <button onClick={previousImages}>Show previous</button>
          </div>
        )}
        <div>
          <button onClick={showMoreImages}>Show more</button>
        </div>
      </div>
    </GalleryContainer>
  )
}

export default Gallery

import React, { useState, useEffect, useRef } from 'react'

import { GalleryContainer } from '../styles/GalleryContainer'

import { translations } from './constants'
import Info from './info'
import ModalInfo from './modalInfo'
import useOnClick from '../hooks/useOnClick'

const Gallery = ({ gnomes, gnome, setGnome }) => {
  const { galleryNext, galleryPrevious } = translations

  const [mosaic, setMosaic] = useState(false)
  const [imagesDisplayed, setImagesDisplayed] = useState(0)
  const [moreImages, setMoreImages] = useState(20)
  const [showModal, setShowModal] = useState(false)
  const showMosaic = () => {
    setMosaic(!mosaic)
  }
  const viewInfo = (id) => {
    setGnome(id)
    setShowModal(true)
  }
  const previousImages = () => {
    setImagesDisplayed(imagesDisplayed - 20)
    setMoreImages(moreImages - 20)
  }
  const showMoreImages = () => {
    setImagesDisplayed(imagesDisplayed + 20)
    setMoreImages(moreImages + 20)
  }
  const ref = useRef()
  useOnClick(ref, () => setShowModal(false))
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <GalleryContainer>
      <div className="c-gallery-menu">
        {imagesDisplayed !== 0 && (
          <div>
            <button onClick={previousImages}>{galleryPrevious}</button>
          </div>
        )}
        <div>
          <button onClick={showMoreImages}>{galleryNext}</button>
        </div>
        <button onClick={showMosaic} id="mosaic">
          {!mosaic ? <i className="fas fa-th"></i> : <i className="far fa-square"></i>}
        </button>
      </div>
      <section className={mosaic && 'c-gallery-mosaic'}>
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

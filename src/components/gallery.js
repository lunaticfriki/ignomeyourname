import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { GalleryContainer } from '../styles/GalleryContainer'

import { translations } from './constants'

import useImages from '../hooks/useImages'
import useMosaic from '../hooks/useMosaic'
import useInfo from '../hooks/useInfo'

const Gallery = ({ gnomes, gnome, setGnome }) => {
  const { galleryNext, galleryPrevious } = translations

  const { imagesDisplayed, moreImages, previousImages, nextImages } = useImages()
  const { showMosaic, mosaic } = useMosaic()
  const { viewInfo, Modal, showModal } = useInfo(gnomes, gnome, setGnome)

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <GalleryContainer>
      <div className="c-gallery-menu">
        {imagesDisplayed !== 0 && <button onClick={previousImages}>{galleryPrevious}</button>}
        <button onClick={nextImages}>{galleryNext}</button>
        <button onClick={showMosaic} id="mosaic" data-testid="mosaic">
          {!mosaic ? <i className="fas fa-th"></i> : <i className="far fa-square"></i>}
        </button>
      </div>
      <section className={mosaic ? 'c-gallery-mosaic' : 'c-display'}>
        {gnomes.slice(imagesDisplayed, moreImages).map((gn) => (
          <article key={gn.id} onClick={() => viewInfo(gn)}>
            <p>{gn.name}</p>
            <div className="c-image">
              <img src={gn.thumbnail} alt={gn.name} />
            </div>
          </article>
        ))}
        {showModal && <Modal />}
      </section>
      <div className="c-gallery-menu">
        {imagesDisplayed !== 0 && (
          <div>
            <button onClick={previousImages}>Show previous</button>
          </div>
        )}
        <div>
          <button onClick={nextImages}>Show more</button>
        </div>
      </div>
    </GalleryContainer>
  )
}

export default Gallery

Gallery.propTypes = {
  gnomes: PropTypes.array,
  gnome: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setGnome: PropTypes.func,
}

Gallery.defaultProps = {
  gnomes: [],
  gnome: '',
  setGnome: () => {},
}

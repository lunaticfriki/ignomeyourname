import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { GalleryContainer } from '../styles/GalleryContainer'

import { translations } from './constants'
import { setGnome } from '../actions/creators/gnomesAction'

import ImageCard from './image-card'

import useImages from '../hooks/useImages'
import useMosaic from '../hooks/useMosaic'
import useInfo from '../hooks/useInfo'

const Gallery = () => {
  const gnomes = useSelector((state) => state.gnomesApi.gnomes.body)
  const gnome = useSelector((state) => state.gnomesApi.gnome)

  const dispatch = useDispatch()

  const { galleryNext, galleryPrevious } = translations

  const { imagesDisplayed, moreImages, previousImages, nextImages } = useImages()
  const { showMosaic, mosaic } = useMosaic()
  const { viewInfo, Modal, showModal } = useInfo(gnomes, gnome)

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const handleModalInfo = (id) => {
    viewInfo()
    dispatch(setGnome(id))
  }
  return (
    <GalleryContainer>
      <div className="c-gallery-menu">
        {imagesDisplayed !== 0 && <button onClick={previousImages}>{galleryPrevious}</button>}
        <button onClick={nextImages}>{galleryNext}</button>
        <button onClick={showMosaic} id="mosaic" data-testid="mosaic" className="c-button-mosaic">
          {!mosaic ? <i className="fas fa-th"></i> : <i className="far fa-square"></i>}
        </button>
      </div>
      <section className={mosaic ? 'c-gallery-mosaic' : 'c-display'}>
        {gnomes.slice(imagesDisplayed, moreImages).map((gn) => (
          <ImageCard gn={gn} setGnome={setGnome} key={gn.id} handleModalInfo={handleModalInfo} />
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

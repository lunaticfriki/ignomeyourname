import React from 'react'

import { GalleryContainer } from '../styles/GalleryContainer'

const Gallery = ({ gnomes, gnome, setGnome }) => {
  return (
    <GalleryContainer>
      {gnomes.map(gn => (
        <>
          <p>{gn.name}</p>
          <img src={gn.thumbnail} alt={gn.name} />
        </>
      ))}
    </GalleryContainer>
  )
}

export default Gallery

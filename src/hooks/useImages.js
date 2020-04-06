import { useState } from 'react'

const useImages = () => {
  const [imagesDisplayed, setImagesDisplayed] = useState(0)
  const [moreImages, setMoreImages] = useState(24)

  const previousImages = () => {
    setImagesDisplayed(imagesDisplayed - 24)
    setMoreImages(moreImages - 24)
  }
  const nextImages = () => {
    setImagesDisplayed(imagesDisplayed + 24)
    setMoreImages(moreImages + 24)
  }
  return { imagesDisplayed, moreImages, previousImages, nextImages }
}

export default useImages

import { useState } from 'react'

const useMosaic = () => {
  const [mosaic, setMosaic] = useState(false)

  const showMosaic = () => {
    setMosaic(!mosaic)
  }
  return { showMosaic, mosaic }
}

export default useMosaic

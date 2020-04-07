import React from 'react'
import PropTypes from 'prop-types'

const ImageCard = ({ gn, handleModalInfo }) => {
  const selectGnome = () => {
    handleModalInfo(gn)
  }
  return (
    <article key={gn.id} onClick={selectGnome}>
      <p>{gn.name}</p>
      <div className="c-image">
        <img src={gn.thumbnail} alt={gn.name} />
      </div>
    </article>
  )
}

export default ImageCard

ImageCard.propTypes = {
  gn: PropTypes.object,
  handleModalInfo: PropTypes.func,
}

ImageCard.defaultProps = {
  gn: {},
  handleModalInfo: () => {},
}

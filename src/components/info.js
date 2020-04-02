import React, { useContext } from 'react'

import { GnomeContext } from '../context/gnomeContext'

const Info = () => {
  const { gnomes } = useContext(GnomeContext)
  console.log(gnomes)
  return (
    <div>
      {gnomes.map(gnome => (
        <div key={gnome.id}>
          <p>{gnome.name}</p>
          <img src={gnome.thumbnail} alt={gnome.name} style={{ width: '100px' }}></img>
        </div>
      ))}
    </div>
  )
}

export default Info

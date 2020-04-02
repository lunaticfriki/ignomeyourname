import React from 'react'
import { InfoContainer } from '../styles/InfoContainer'

const Info = ({ gnomes, gnome }) => {
  return (
    <InfoContainer>
      {gnomes.map(
        el =>
          el.name === gnome && (
            <div key={el.id}>
              <h4>{el.name}</h4>
              <img src={el.thumbnail} alt={el.name} style={{ width: '500px' }}></img>
              <p>{el.age}</p>
              <p>{el.weight}</p>
              <p>{el.height}</p>
              <p>{el.hair_color}</p>
              <ul>
                Professions:
                {el.professions.map((prof, idx) => (
                  <li key={idx}>{prof}</li>
                ))}
              </ul>
              <ul>
                Friends:
                {el.professions.map((friend, idx) => (
                  <li key={idx}>{friend}</li>
                ))}
              </ul>
            </div>
          )
      )}
    </InfoContainer>
  )
}

export default Info

import React from 'react'

import { InfoContainer } from '../styles/InfoContainer'

import { translations } from './constants'

const Info = ({ gnomes, gnome }) => {
  const { noInfo, gnomeAge, gnomeWeight, gnomeHeight, gnomeHaircolor, gnomeProfessions, gnomeFriends } = translations

  return (
    <InfoContainer>
      {gnome.length === 0
        ? noInfo
        : gnomes.map(
            el =>
              el.name === gnome && (
                <div className="c-info-card" key={el.id}>
                  <div className="c-info-title">
                    <h4>{el.name}</h4>
                    <img src={el.thumbnail} alt={el.name}></img>
                  </div>
                  <div className="c-info-content">
                    <p>
                      {gnomeAge} {el.age}
                    </p>
                    <p>
                      {gnomeWeight} {el.weight.toFixed(1)}
                    </p>
                    <p>
                      {gnomeHeight}
                      {el.height.toFixed(1)}
                    </p>
                    <p>
                      {gnomeHaircolor}
                      {el.hair_color}
                    </p>
                    <p>{gnomeProfessions}</p>
                    <ul>
                      {el.professions.map((prof, idx) => (
                        <li key={idx}>{prof}</li>
                      ))}
                    </ul>
                    <p>{gnomeFriends}</p>
                    <ul>
                      {el.professions.map((friend, idx) => (
                        <li key={idx}>{friend}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
          )}
    </InfoContainer>
  )
}

export default Info

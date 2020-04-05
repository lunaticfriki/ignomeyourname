import React from 'react'

import { InfoContainer } from '../styles/InfoContainer'
import { translations } from './constants'

const Info = ({ gnomes, gnome }) => {
  const { noInfo, gnomeAge, gnomeWeight, gnomeHeight, gnomeHaircolor, gnomeProfessions, gnomeFriends } = translations

  return (
    <InfoContainer>
      {gnome.length === 0 ? (
        <p>{noInfo}</p>
      ) : (
        gnomes.map(
          (el) =>
            el.name === gnome && (
              <div className="c-info-card" key={el.id}>
                <div className="c-info-title">
                  <h4>{el.name}</h4>
                  <img src={el.thumbnail} alt={el.name}></img>
                </div>
                <div className="c-info-content">
                  <article className="c-article-main-info">
                    <p>
                      <span>{gnomeAge}</span> {el.age}
                    </p>
                    <p>
                      <span>{gnomeWeight}</span> {el.weight.toFixed(1)}
                    </p>
                    <p>
                      <span>{gnomeHeight}</span>
                      {el.height.toFixed(1)}
                    </p>
                    <p>
                      <span>{gnomeHaircolor}</span>
                      {el.hair_color}
                    </p>
                  </article>
                  <article className="c-article-extra-info">
                    <p>
                      <span>{gnomeProfessions}</span>
                    </p>
                    <ul>
                      {el.professions.map((prof, idx) => (
                        <li key={idx}>{prof}</li>
                      ))}
                    </ul>
                    <p>
                      <span>{gnomeFriends}</span>
                    </p>
                    <ul>
                      {el.professions.map((friend, idx) => (
                        <li key={idx}>{friend}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            )
        )
      )}
    </InfoContainer>
  )
}

export default Info

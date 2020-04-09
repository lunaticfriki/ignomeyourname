import React from 'react'
import { useSelector } from 'react-redux'

import { InfoContainer } from '../styles/InfoContainer'
import { translations } from './constants'
import image from '../assets/images/anton-vorobiev.jpg'

const Info = () => {
  const gnomes = useSelector((state) => state.gnomesApi.gnomes.body)
  const gnome = useSelector((state) => state.gnomesApi.gnome)

  const {
    noInfo,
    gnomeAge,
    gnomeWeight,
    gnomeHeight,
    gnomeHaircolor,
    gnomeProfessions,
    gnomeFriends,
    noInfoPhotoUrl,
    noInfoPhotoText,
  } = translations

  return (
    <InfoContainer>
      {gnome === '' ? (
        <div className="c-no-info">
          <p>{noInfo}</p>
          <a href={noInfoPhotoUrl} target="blank">
            <img src={image} alt={noInfo} />
          </a>
          <i>{noInfoPhotoText}</i>
        </div>
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
                      {el.friends.map((friend, idx) => (
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

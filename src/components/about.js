import React from 'react'

import { AboutContainer } from '../styles/AboutContainer'
import { translations } from './constants'
import image from '../assets/images/david-brooke-martin.jpg'

const About = () => {
  const { aboutTitle, aboutArticle, aboutPhotoText, aboutPhotoUrl } = translations

  return (
    <AboutContainer>
      <h3>{aboutTitle}</h3>
      <article>{aboutArticle}</article>
      <a href={aboutPhotoUrl} target="blank">
        <img src={image} alt="gnome" />
      </a>
      <i>{aboutPhotoText}</i>
    </AboutContainer>
  )
}

export default About

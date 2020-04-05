import styled from 'styled-components'
import Montserrat from '../assets/fonts/Montserrat-Regular.ttf'

import { device } from './devices'
import { colors } from '../components/colors'

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-columns: 100%;
  grid-template-rows: 10em 1fr 5em;
  @media ${device.mobileS} {
    grid-template-rows: 5em 1fr 5em;
  }
  @media ${device.mobileM} {
    grid-template-rows: 5em 1fr 5em;
  }
  @media ${device.mobileL} {
    grid-template-rows: 5em 1fr 5em;
  }
  @media ${device.tablet} {
    grid-template-rows: 10em 1fr 5em;
  }
  @media ${device.laptop} {
    grid-template-rows: 10em 1fr 5em;
  }
  @media ${device.laptopL} {
    grid-template-rows: 10em 1fr 5em;
  }
  @media ${device.desktop} {
    grid-template-rows: 10em 1fr 5em;
  }
  background-color: ${colors.genericDark};
  color: ${colors.genericLight};
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }
  font-family: 'Montserrat';
  h1 {
    @media ${device.mobileS} {
      font-size: 22px;
    }
    @media ${device.mobileM} {
      font-size: 22px;
    }
    @media ${device.mobileL} {
      font-size: 22px;
    }
    @media ${device.tablet} {
      font-size: 35px;
    }
    @media ${device.laptop} {
      font-size: 40px;
    }
    @media ${device.laptopL} {
      font-size: 45px;
    }
    @media ${device.desktop} {
      font-size: 50px;
    }
    line-height: 1.4;
    font-weight: normal;
    font-stretch: normal;
    color: ${colors.genericTitle};
  }
  h2 {
    @media ${device.mobileS} {
      font-size: 12px;
    }
    @media ${device.mobileM} {
      font-size: 12px;
    }
    @media ${device.mobileL} {
      font-size: 12px;
    }
    @media ${device.tablet} {
      font-size: 15px;
    }
    @media ${device.laptopL} {
      font-size: 20px;
    }
    @media ${device.laptopL} {
      font-size: 20px;
    }
    @media ${device.desktop} {
      font-size: 25px;
    }
    font-size: 20px;
    line-height: 1.4;
    font-weight: normal;
    font-stretch: normal;
  }
  li {
    &:hover {
      color: ${colors.genericHover};
    }
  }
  a {
    color: ${colors.genericLight};
    text-decoration: none;
  }
  i {
    font-size: 12px;
  }
  button {
    width: 9em;
    height: 4em;
    background: ${colors.genericDark};
    color: ${colors.genericLight};
    border: 1px solid ${colors.genericHover};
    margin: 1em;
    padding: 1em;
    cursor: pointer;
    &:hover {
      background: ${colors.genericHover};
      border: 1px solid ${colors.genericDark};
    }
  }
`

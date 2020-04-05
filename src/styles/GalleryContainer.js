import styled from 'styled-components'

import { device } from './devices'
import { colors } from '../components/colors'

export const GalleryContainer = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  .c-gallery-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #mosaic {
    border: none;
    padding: 0;
    margin: 0;
    &:hover {
      background-color: unset;
    }
    @media ${device.mobileS} {
      width: 0.5em;
    }
    @media ${device.mobileM} {
      width: 5em;
    }
    @media ${device.mobileL} {
      width: 5em;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.laptopL} {
      display: none;
    }
    @media ${device.desktop} {
      display: none;
    }
  }
  .c-gallery-mosaic {
    article {
      @media ${device.mobileS} {
        width: 5em;
        height: 5em;
      }
      @media ${device.mobileM} {
        width: 5em;
        height: 5em;
      }
      @media ${device.mobileL} {
        width: 5em;
        height: 5em;
      }
      @media ${device.tablet} {
        width: 30em;
      }
      @media ${device.laptop} {
        width: 30em;
      }
      @media ${device.laptopL} {
        width: 30em;
      }
      @media ${device.desktop} {
        width: 30em;
      }
      height: 20em;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      margin: 0;
    }
    img {
      border: 2px solid ${colors.genericTitle};
      @media ${device.mobileS} {
        width: 5em;
        height: 5em;
      }
      @media ${device.mobileM} {
        width: 5em;
        height: 5em;
      }
      @media ${device.mobileL} {
        width: 5em;
        height: 5em;
      }
      @media ${device.tablet} {
        width: 30em;
      }
      @media ${device.laptop} {
        width: 30em;
      }
      @media ${device.laptopL} {
        width: 30em;
      }
      @media ${device.desktop} {
        width: 30em;
      }
    }
    p {
      display: none;
    }
  }
  section {
    @media ${device.mobileS} {
      width: 100%;
    }
    @media ${device.mobileM} {
      width: 100%;
    }
    @media ${device.mobileL} {
      width: 100%;
    }
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.laptop} {
      width: 100%;
    }
    @media ${device.laptopL} {
      width: 60%;
    }
    @media ${device.desktop} {
      width: 60%;
    }
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-left: -8px;
  }
  article {
    width: 30em;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    overflow: hidden;
    .c-image {
      overflow: hidden;
      width: 100%;
    }
    img {
      width: 100%;
      transition: 1s;
      cursor: pointer;
    }
    &:hover {
      p {
        color: ${colors.genericHover};
      }
      img {
        transition: 1s;
        opacity: 0.5;
        transform: scale(1.5);
      }
    }
  }
`

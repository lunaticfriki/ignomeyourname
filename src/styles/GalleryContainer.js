import styled from 'styled-components'

import { device } from '../devices'
import { colors } from '../components/colors'

export const GalleryContainer = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  section {
    @media ${device.mobileS} {
      columns: 1;
      padding-block-start: unset;
    }
    @media ${device.mobileM} {
      columns: 1;
      padding-block-start: unset;
    }
    @media ${device.mobileL} {
      columns: 1;
      padding-block-start: unset;
    }
    @media ${device.tablet} {
      columns: 2;
      padding-block-start: 1em;
    }
    @media ${device.laptop} {
      columns: 3;
      padding-block-start: 2em;
    }
    @media ${device.laptopL} {
      columns: 4;
      padding-block-start: 2em;
    }
    @media ${device.desktop} {
      columns: 5;
      padding-block-start: 2em;
    }
    display: inline-block;
    padding-block-start: 2em;
    margin: auto;
  }
  article {
    width: 15em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    margin-block-end: 1em;
    &:hover {
      p {
        color: ${colors.genericHover};
      }
      img {
        opacity: 0.5;
      }
    }
  }
  img {
    width: 15em;
    cursor: pointer;
  }
`

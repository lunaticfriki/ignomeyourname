import styled from 'styled-components'

import { colors } from '../components/colors'

export const GalleryContainer = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  section {
    columns: 5;
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

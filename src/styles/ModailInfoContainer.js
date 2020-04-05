import styled from 'styled-components'
import Montserrat from '../assets/fonts/Montserrat-Regular.ttf'

import { device } from './devices'
import { colors } from '../components/colors'

export const ModalInfoContainer = styled.div`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }
  font-family: 'Montserrat';
  @media ${device.mobileS} {
    width: 100%;
    height: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
    height: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
  @media ${device.laptop} {
    width: 50em;
    height: 40em;
  }
  @media ${device.laptopL} {
    width: 50em;
    height: 40em;
  }
  @media ${device.desktop} {
    width: 50em;
    height: 40em;
  }
  display: grid;
  grid-template-areas: 'header' 'section';
  grid-template-rows: 4em 1fr;
  grid-template-columns: 1fr;
  background: ${colors.genericDark};
  color: ${colors.genericLight};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid ${colors.genericTitle};
  box-shadow: 1px 2px 5px black;
  z-index: 2;
  overflow-y: scroll;
  header {
    grid-area: header;
    display: flex;
    justify-content: flex-end;
  }
  section {
    grid-area: section;
  }
  button {
    width: 7em;
    height: 2em;
    background: ${colors.genericDark};
    color: ${colors.genericLight};
    border: 1px solid ${colors.genericHover};
    margin: 1em;
    cursor: pointer;
    &:hover {
      background: ${colors.genericHover};
      border: 1px solid ${colors.genericDark};
    }
  }
  i {
    color: ${colors.genericLight};
  }
`

import styled from 'styled-components'
import Montserrat from '../assets/fonts/Montserrat-Regular.ttf'
import { colors } from '../components/colors'

export const ModalInfoContainer = styled.div`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }
  font-family: 'Montserrat';
  width: 50em;
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
  border-radius: 5px;
  z-index: 2;
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

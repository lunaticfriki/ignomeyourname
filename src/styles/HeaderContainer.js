import styled from 'styled-components'

import { device } from './devices'
import { colors } from '../components/colors'

export const HeaderContainer = styled.div`
  @media ${device.mobileS} {
    height: 5em;
  }
  @media ${device.mobileM} {
    height: 5em;
  }
  @media ${device.mobileL} {
    height: 5em;
  }
  @media ${device.tablet} {
    height: 10em;
  }
  @media ${device.laptop} {
    height: 10em;
  }
  @media ${device.laptopL} {
    height: 10em;
  }
  @media ${device.desktop} {
    height: 10em;
  }
  width: 100%;
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: ${colors.genericDark};
  position: sticky;
  top: 0;
  z-index: 1;
  nav {
    padding-block-start: 1em;
    display: flex;
  }
  li {
    list-style: none;
    @media ${device.mobileS} {
      font-size: 16px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
    @media ${device.mobileL} {
      font-size: 16px;
    }
    @media ${device.tablet} {
      font-size: 16px;
    }
    @media ${device.laptop} {
      font-size: 18px;
    }
    @media ${device.laptopL} {
      font-size: 18px;
    }
    @media ${device.desktop} {
      font-size: 20px;
    }
    align-self: flex-end;
    padding-inline-end: 1em;
    cursor: pointer;
  }
`

import styled from 'styled-components'

import { device } from '../devices'

export const AboutContainer = styled.div`
  grid-area: main;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    @media ${device.mobileS} {
      width: 300px;
    }
    @media ${device.mobileM} {
      width: 300px;
    }
    @media ${device.mobileL} {
      width: 400px;
    }
    @media ${device.tablet} {
      width: 400px;
    }
    @media ${device.laptop} {
      width: 600px;
    }
    @media ${device.laptopL} {
      width: 600px;
    }
    @media ${device.desktop} {
      width: 700px;
    }
  }
  i {
    font-size: 10px;
  }
`

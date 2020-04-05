import styled from 'styled-components'

import { device } from '../devices'

export const AppContainer = styled.div`
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL}, ${device.mobileL} {
    width: 100vw;
  }
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

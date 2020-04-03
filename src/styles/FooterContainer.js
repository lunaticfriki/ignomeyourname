import styled from 'styled-components'

import { colors } from '../components/colors'

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 5em;
  grid-area: footer;
  padding: 1em;
  display: flex;
  align-items: center;
  background: ${colors.genericDark};
  position: sticky;
  bottom: 0;
  i {
    color: ${colors.genericTitle};
  }
`

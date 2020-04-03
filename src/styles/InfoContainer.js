import styled from 'styled-components'

import { colors } from '../components/colors'

export const InfoContainer = styled.div`
  width: 100%;
  padding: 1em;
  .c-info-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-block-end: 2em;
    .c-info-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      margin-inline-end: 2em;
      h4 {
        color: ${colors.genericHover};
        font-size: 25px;
      }
      img {
        width: 20em;
      }
    }
    .c-info-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      p {
        padding-block-start: 0.5em;
      }
      ul {
        padding: 1em;
      }
      li {
        list-style: none;
        &:hover {
          color: inherit;
        }
      }
    }
  }
`

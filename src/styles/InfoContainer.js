import styled from 'styled-components'

import { device } from '../devices'
import { colors } from '../components/colors'

export const InfoContainer = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  .c-info-card {
    @media ${device.mobileS} {
      flex-direction: column;
    }
    @media ${device.mobileM} {
      flex-direction: column;
    }
    @media ${device.mobileL} {
      flex-direction: column;
    }
    @media ${device.tablet} {
      flex-direction: column;
    }
    @media ${device.laptop} {
      flex-direction: row;
    }
    @media ${device.laptopL} {
      flex-direction: row;
    }
    @media ${device.desktop} {
      flex-direction: row;
    }
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-block-end: 2em;
    .c-info-title {
      @media ${device.mobileS} {
        margin-inline-end: unset;
      }
      @media ${device.mobileM} {
        margin-inline-end: unset;
      }
      @media ${device.mobileL} {
        margin-inline-end: unset;
      }
      @media ${device.tablet} {
        margin-inline-end: 2em;
      }
      @media ${device.laptop} {
        margin-inline-end: 2em;
      }
      @media ${device.laptopL} {
        margin-inline-end: 2em;
      }
      @media ${device.desktop} {
        margin-inline-end: 2em;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-inline-end: 2em;
      h4 {
        color: ${colors.genericHover};
        font-size: 25px;
      }
      img {
        @media ${device.mobileS} {
          width: 13em;
        }
        @media ${device.mobileM} {
          width: 13em;
        }
        @media ${device.mobileL} {
          width: 13em;
        }
        @media ${device.tablet} {
          width: 20em;
        }
        @media ${device.laptop} {
          width: 20em;
        }
        @media ${device.laptopL} {
          width: 20em;
        }
        @media ${device.desktop} {
          width: 20em;
        }
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

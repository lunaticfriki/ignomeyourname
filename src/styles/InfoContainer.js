import styled from 'styled-components'

import { device } from './devices'
import { colors } from '../components/colors'

export const InfoContainer = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  .c-info-card {
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    .c-info-title {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      h4 {
        color: ${colors.genericHover};
        @media ${device.mobileS} {
          font-size: 15px;
        }
        @media ${device.mobileM} {
          font-size: 15px;
        }
        @media ${device.mobileL} {
          font-size: 15px;
        }
        @media ${device.tablet} {
          font-size: 18px;
        }
        @media ${device.laptop} {
          font-size: 22px;
        }
        @media ${device.laptopL} {
          font-size: 25px;
        }
        @media ${device.desktop} {
          font-size: 28px;
        }
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
      display: grid;
      grid-template-areas: 'main extra';
      grid-template-columns: 50% 50%;
      grid-template-rows: 1fr;
      article {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-block-start: 1em;
      }
      .c-article-main-info {
        grid-area: main;
      }
      .c-article-extra-info {
        grid-area: extra;
      }
      p {
        padding-block-start: 0.5em;
      }
      span {
        color: ${colors.genericTitle};
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

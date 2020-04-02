import styled from 'styled-components'

export const InfoContainer = styled.div`
  width: 80%;
  padding: 1em;
  .c-info-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    .c-info-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      img {
        width: 500px;
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
        &:hover {
          color: inherit;
        }
      }
    }
  }
`

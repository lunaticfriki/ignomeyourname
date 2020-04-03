import styled from 'styled-components'

export const GalleryContainer = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  section {
    columns: 5;
    display: inline-block;
    padding-block-start: 2em;
    margin: auto;
  }
  article {
    width: 15em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    margin-block-end: 1em;
  }
  img {
    width: 15em;
  }
`

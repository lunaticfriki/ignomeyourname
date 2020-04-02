import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 7em;
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  nav {
    padding-block-start: 1em;
    display: flex;
  }
  li {
    align-self: flex-end;
    padding-inline-end: 1em;
    cursor: pointer;
  }
`

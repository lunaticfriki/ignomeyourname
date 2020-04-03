import styled from 'styled-components'

export const SearcherContainer = styled.div`
  width: 20%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    label {
      padding: 1em;
    }
    .c-use-gnome {
      display: flex;
      flex-direction: column;
      padding: 0;
    }
    input,
    select {
      width: 20em;
      height: 3em;
      border: none;
      padding: 0.5em;
      margin-block-start: 0.5em;
      cursor: pointer;
    }
    button {
      align-self: center;
    }
  }
`

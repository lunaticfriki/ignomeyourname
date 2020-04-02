import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  width: 60%;
`

const Info = () => {
  return (
    <InfoContainer>
      {/* {gnomes.map(gnome => (
        <div key={gnome.id}>
          <p>{gnome.name}</p>
          <img src={gnome.thumbnail} alt={gnome.name} style={{ width: '100px' }}></img>
        </div>
      ))} */}
      info
    </InfoContainer>
  )
}

export default Info

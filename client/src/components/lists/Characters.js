import React from 'react'

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import CharacterContainer from '../containers/CharacterContainer'

const Characters = () => {
  return (
    <ul>
      <Container>
        <List>
          <CharacterContainer />
        </List>
      </Container>
    </ul>
  )
}

export default Characters

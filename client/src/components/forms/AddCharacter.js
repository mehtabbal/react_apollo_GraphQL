import React from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { ADD_CHARACTER, GET_CHARACTERS } from '../../queries'

const AddCharacter = ({ id, firstName, lastName, onInputChange }) => {
  const [addCharacter] = useMutation(
    ADD_CHARACTER,
    {
      update(cache, { data: { addCharacter } }) {
        const { characters } = cache.readQuery({ query: GET_CHARACTERS})
        cache.writeQuery({
          query: GET_CHARACTERS,
          data: { characters: characters.concat([addCharacter])}
        })
      }
    }
  )

  return (
    <form onSubmit={e => {
      e.preventDefault()
      addCharacter({
        variables: {
          id, firstName, lastName
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addCharacter: {
            __typename: 'Character',
            id,
            firstName,
            lastName
          }
        }
      })
    }}>
      <TextField
        label='FirstName'
        value={firstName}
        placeholder='FirstName'
        onChange={e => onInputChange('firstName', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='LastName'
        value={lastName}
        placeholder='LastName'
        onChange={e => onInputChange('lastName', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Character
      </Button>
    </form>
  )
}
export default AddCharacter
import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const AddCharacter = () => {
  return (
    <form>
      <TextField
        label='First Name'
        value='John'
        placeholder='i.e. John'
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        value='Smith'
        placeholder='i.e. Smith'
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
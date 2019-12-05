import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { ADD_DEVICE, GET_DEVICES } from '../../queries'
import { Select } from '@material-ui/core'

const AddDevice = ({ id, year, brand, model, price, category, onInputChange }) => {
  const [addDevice] = useMutation(
    ADD_DEVICE,
    {
      update(cache, { data: { addDevice } }) {
        const { devices } = cache.readQuery({ query: GET_DEVICES })
        cache.writeQuery({
          query: GET_DEVICES,
          data: { devices: devices.concat([addDevice])}
        })
      }
    }
  )

  return (
    <form onSubmit={e => {
      e.preventDefault()
      addDevice({
        variables: {
          id, year, brand, model, price, category
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addDevice: {
            __typename: 'Device',
            id,
            year,
            brand,
            model,
            price,
            category
          }
        }
      })
    }}>
      <TextField
       label='Year'
       defaultValue='2019'
       placeholder='i.e. 2019'
       type='number'
       margin='normal'
       variant='outlined'
       style={{ display: 'flex', margin: '10px' }}
        onChange={e => onInputChange('year', e.target.value)}
 
      />
    
      <TextField
        label='Brand'
        value={brand}
        placeholder='Brand'
        onChange={e => onInputChange('brand', e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
    
      label='Model'
      defaultValue='Apple'
      placeholder='i.e. Apple'
      margin='normal'
      variant='outlined'
      style={{ display: 'flex', margin: '10px' }}
      onChange={e => onInputChange('model', e.target.value)}
      />

    <TextField
       
        onChange={e => onInputChange('price', e.target.value)}
        label='Price'
        defaultValue='1500'
        placeholder='i.e. 1500'
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
       
      />
      
      <Select
        native
        defaultValue='1'
        value='1'
        input={
          <OutlinedInput name='character' id="outlined-age-native-simple" />
        }
        style={{ display: 'flex', margin: '10px' }}
      >
        <option value='id'>John Smith</option>
      </Select>
      
      
      
      

      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Device
      </Button>
    </form>
  )
}
export default AddDevice

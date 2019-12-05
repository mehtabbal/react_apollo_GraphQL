import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import UpdateCharacter from '../forms/UpdateCharacter'
import RemoveCharacter from '../buttons/RemoveCharacter'
import DisplayCard from '../cards/DisplayCard'
import Devices from '../lists/Devices'


const Character = (props) => {
  const { editMode, id, firstName, lastName, onButtonClick, onInputChange } = props
  const fullName = `${firstName} ${lastName} `
  return (
    <DisplayCard>
      <Fragment>
      {
        editMode ?
          <UpdateCharacter
            id={id}
            firstName={firstName}
            lastName={lastName}
            editMode={editMode}
            onButtonClick={onButtonClick}
            onInputChange={onInputChange}
          />
          :
          <ListItem id ='color'>
            <ListItemText
              primary={fullName}
        
            />
            <Button
              onClick={onButtonClick}
              variant='contained'
              style={{ margin: '5px' }}
            >
              Edit
            </Button>
            <RemoveCharacter
              id={id}
              firstName={firstName}
              lastName={lastName}
              
            />
          </ListItem>
        }
        <Devices/>
        <CardActions>
          <BrowserRouter>
          <Button color='primary' size='small' variant='outlined'>
            <Link to={{
              pathname: `/Character/${id}`,
              state: { characters: firstName }
            }}
            >
            Learn More
            </Link>
          </Button>
          </BrowserRouter>
        </CardActions>
      </Fragment>
    </DisplayCard>
  )
}
export default Character

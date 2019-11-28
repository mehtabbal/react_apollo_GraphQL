import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'


import RemoveCharacter from '../buttons/RemoveCharacter'
import DisplayCard from '../cards/DisplayCard'
import Devices from '../lists/Devices'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})


const Character = () => {
  const classes = useStyles()

  return (
    <DisplayCard>
      <Fragment>
        <ListItem>
          <ListItemText
            primary='John Smith'
          />
        <Button
          variant='contained'
          style={{ margin: '5px' }}
        >
          Edit
        </Button>
        <RemoveCharacter />
        </ListItem>
        <Devices />
        <CardActions>
          <Button color='primary' size='small' variant='outlined'>
            Learn More
          </Button>
        </CardActions>
      </Fragment>
    </DisplayCard>
  )
}

export default Character

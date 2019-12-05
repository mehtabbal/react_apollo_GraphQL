import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Currency from 'react-currency-formatter'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import DisplayCard from '../cards/DisplayCard'
import '../../App'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Show = () => {
  const classes = useStyles()

  return (
    <Container className='App'>
      <DisplayCard>
        <Fragment>
          <ListItem>
            <ListItemText
              primary={fullName}
            />
          </ListItem>
          <ul>
            <DisplayCard>
              <ListItem>
                <ListItemText
                  primary={fullName}
                  secondary={fullName}
                />
              </ListItem>
            </DisplayCard>
          </ul>
        </Fragment>
        <CardActions>
          <Button color='primary' size='small' variant='outlined'>
          <Link to={{
              pathname: '/',
              state: { character: fullName }
            }}
            >
            Go Back Home
            </Link>
          </Button>
        </CardActions>
      </DisplayCard>
    </Container>
  )
}

export default Show

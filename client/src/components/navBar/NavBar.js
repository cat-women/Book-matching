import React, { useState, useEffect } from 'react'
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import makeStyles from './styles'
import library from '../../images/library.jpg'
import * as actionTypes from '../../actions/actionTypes'

const NavBar = () => {
  const classes = makeStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const history = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
    
  }, [location])

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT })
    history('/auth')
    setUser(null)
  }

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant='h2' align='center'>
          Library
        </Typography>
        <img
          src={library}
          className={classes.image}
          alt='library'
          height='60'
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

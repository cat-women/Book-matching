import React, { useState } from 'react'
import {
  Container,
  Button,
  Paper,
  Typography,
  Avatar,
  Grid
} from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import makeStyles from './styles'
import Input from './Input.js'
import icon from './icon.js'
import { signup, signin } from '../../actions/auth'

const googdleId =
  '214440666264-gfkag0d3f2i5luia4pdqob2c4n4lul4l.apps.googleusercontent.com'
const initialState = {
  name: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: ''
}
const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setformData] = useState(initialState)
  const classes = makeStyles()
  const history = useNavigate()
  const dispatch = useDispatch()

  /*
  const googleFailure = res => {
    alert('Something wentwrong ')
    console.log(`google login faile`, res)
  }

  const googleSuccess = async res => {
    alert('Coming in future ')
    console.log('google login success ')
  }
  */
  const handleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (isSignUp) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
    console.log(formData)
  }
  const handleChange = e => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }
  const switchMode = () => {
    setIsSignUp(prevIsSignUp => !prevIsSignUp)
    handleShowPassword(true)
  }

  const onSuccess = res => {
    console.log('success', res)
  }
  const onFailure = () => {
    console.log('fail')
  }
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elavation={3}>
        <Typography variant='h6'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {isSignUp && (
            <Grid>
              <Input
                name='name'
                label='Name'
                handleChange={handleChange}
                autoFocus
                half
              />
              <Input
                name='contact'
                label='Contact'
                handleChange={handleChange}
                autoFocus
                half
              />
            </Grid>
          )}
          <Grid>
            <Input
              name='email'
              label='Email'
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name='confirmPassword'
                label='Repeat passoword'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignUp ? 'Sign up' : 'Sign in'}
          </Button>
          {/*
            <GoogleLogin
              clientId={googdleId}
              className={classes.googleButton}
              render={rednerProps => (
                <Button
                  className={classes.googleButton}
                  color='primary'
                  fullWidth
                  onClick={rednerProps.onClick}
                  disable={rednerProps.disable}
                  startIcon={<icon />}
                  variant='contained'
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy='single_host_origin'
            />
              */}
          <Grid justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have a account ? Sign in'
                  : 'Dont have account? Sign up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth

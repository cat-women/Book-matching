import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getBooks, getRecommendation } from '../../actions/books'
import { getUserProfile } from '../../actions/userProfile'
import { getMatch, getRequest } from '../../actions/matchBook'

import Form from '../form/Form.js'
import Posts from '../posts/Posts.js'
import Preferences from '../preferences/preferences.js'

const Home = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile')).result

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getUserProfile(user._id))
    dispatch(getMatch(user._id))
    dispatch(getRequest(user._id))
    dispatch(getRecommendation(user._id))
  }, [dispatch, user])

  return (
    <Grow in>
      <Container maxWidth={false}>
        <Grid
          container
          justify='space-between'
          alightItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} sm={12}>
              <Preferences />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Form />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home

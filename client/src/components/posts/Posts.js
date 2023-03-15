import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress, Typography } from '@material-ui/core'

import Post from './post/Post.js'
import useStyles from './styles.js'
import Book from './userBook.js'
import MatchedBook from '../match/match.js'
import RequestBook from '../match/requestedBook.js'

const Posts = () => {
  const results = useSelector(state => state.books)
  const recommededBook = useSelector(state => state.recomendBook)
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem('profile')).result
  const userProfile = useSelector(state => state.profile)
  const likes = userProfile.likes

  const books = results.filter(book => book.ownerId !== user._id)
  const currentUserBook = results.filter(book => book.ownerId === user._id)

  const configureLike = id => {
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].bookId === id) return likes[i]
    }
    return false
  }

  return !results.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={10}
    >
      {/* recommended books */}
      <Grid lg={12}>
        <Typography align='center' variant='h4' component='h4'>
          Recommended Books
        </Typography>
      </Grid>

      {recommededBook.length > 0 &&
        recommededBook.map(post => (
          <Grid item key={post._id} sm={6} md={4} lg={3}>
            <Post post={post} like={configureLike(post._id)} />
          </Grid>
        ))}
      <Grid lg={12}>
        <Typography align='center' variant='h4' component='h4'>
          Discover Others books
        </Typography>
      </Grid>
      {/* all books */}
      {books.length > 0 &&
        books.map(post => (
          <Grid item xs={12} sm={6} md={4} lg={3} spacing={5}>
            <Post post={post} like={configureLike(post._id)} />
          </Grid>
        ))}

      {/* Current users books */}
      <Grid lg={12}>
        <Typography align='center' variant='h4' component='h4'>
          Your Books
        </Typography>
      </Grid>
      {currentUserBook.length > 0 &&
        currentUserBook.map(book => <Book book={book} />)}
      <Grid lg={12}>
        <Typography variant='h4'>Books you have requested </Typography>

        <MatchedBook />
      </Grid>
      <Grid lg={12}>
        <Typography variant='h4'>Request for your book </Typography>

        <RequestBook />
      </Grid>
    </Grid>
  )
}
export default Posts

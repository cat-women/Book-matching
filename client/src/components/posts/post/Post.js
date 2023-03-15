import React, { useState } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'

import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles.js'
import AlertDialog from '../dialog.js'
import { updateUserProfile } from '../../../actions/userProfile.js'

const Post = props => {
  const classes = useStyles()
  const post = props.post
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile')).result
  const userProfile = useSelector(state => state.profile)
  const matchBook = useSelector(state => state.match)
  const requestedBook = useSelector(state => state.requestedBook)


  const preLike = props.like

  const [postData, setpostData] = useState({
    bookId: post._id,
    like: preLike ? preLike.like : false
  })
  const [open, setOpen] = React.useState(props.open)

  const isLiked = postData.like

  const handleLike = e => {
    e.preventDefault()
    setpostData({ ...postData, like: !postData.like })
    dispatch(updateUserProfile({ likes: postData }, user._id))
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image}
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant='h6'> {post.title} </Typography>
        <Typography variant='h6'> By: {post.author} </Typography>

        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' component='h2'>
          {post.keywords}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.discription}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <ThumbUpIcon
          color={isLiked ? 'primary' : 'disabled'}
          onClick={e => handleLike(e)}
        />
        <Button size='small' color='primary' onClick={handleClickOpen}>
          <SwapHorizIcon fontSize='small' /> Match
        </Button>
        {open && <AlertDialog open={open} book={post} />}
      </CardActions>
    </Card>
  )
}

export default Post

import React, { useState } from 'react'
import { Button, Typography, Paper, TextField } from '@material-ui/core'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { useDispatch, useSelector } from 'react-redux'

import makeStyles from './styles.js'
import { addUserProfile } from '../../actions/userProfile.js'

const Preferences = () => {
  const user = JSON.parse(localStorage.getItem('profile')).result
  const [postData, setPostData] = useState({ userId: user._id, keywords: '' })

  const classes = makeStyles()
  const dispatch = useDispatch()
  const userProfile = useSelector(state => state.profile)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addUserProfile(postData))
  }

  return (
    <Paper className={classes.paper}>
      {userProfile.keywords  ? (
        <div>
          <h3>Your Preferences</h3>
          {userProfile.keywords.map((item,key) => (
            <p style={{ display: 'inline', padding: '10px' }} key ={key}>{item}</p>
          ))}
          <Button
            className={classes.buttonEdit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Edit
          </Button>
        </div>
      ) : (
        <form
          autoComplete='off'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant='h5'>Add Your Preferences</Typography>

          <TextField
            name='keyword'
            variant='outlined'
            label='Preferences'
            value={postData.keywords}
            fullWidth
            onChange={e =>
              setPostData({ ...postData, keywords: e.target.value })
            }
          />  

          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            <AddCircleRoundedIcon
              className={classes.addIcon}
              sx={{ width: '3rem', height: '2rem', marginTop: '0.3rem' }}
            />
          </Button>
        </form>
      )}
    </Paper>
  )
}

export default Preferences

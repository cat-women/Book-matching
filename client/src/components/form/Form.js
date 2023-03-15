import React, { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { useDispatch } from 'react-redux'
import FileBase64 from 'react-file-base64'

import useStyles from './styles.js'
import { createBook } from '../../actions/books.js'

const Registration = () => {
  const [postData, setPostData] = useState({
    title: '',
    author: '',
    ownerId: JSON.parse(localStorage.getItem('profile')).result._id,
    discription: '',
    image: '',
    category: '',
    keywords: ''
  })
  const [keyword, setkeyword] = useState()

  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createBook(postData))
  }
  const clear = e => {
    e.preventDefault()
    setPostData({
      title: '',
      author: '',
      ownerId: JSON.parse(localStorage.getItem('profile')).result.name,
      discription: '',
      image: '',
      category: '',
      keywords: ''
    })
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h5'>Add Book</Typography>
        <TextField
          name='title'
          variant='outlined'
          label='Book Title'
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='author'
          variant='outlined'
          label='Author'
          fullWidth
          value={postData.author}
          onChange={e => setPostData({ ...postData, author: e.target.value })}
        />
        <FormControl fullWidth variant='outlined'>
          <InputLabel id='demo-simple-select-label'>Category</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={postData.category}
            label='Age'
            onChange={e =>
              setPostData({ ...postData, category: e.target.value })
            }
          >
            <MenuItem value='Adventure stories'>Adventure stories</MenuItem>
            <MenuItem value='Fantasy'>Fantasy</MenuItem>
            <MenuItem value='Academic'>Academic</MenuItem>
          </Select>
        </FormControl>

        <FileBase64
          variant='outlined'
          fullWidth
          type='file'
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
        />
        <TextField
          variant='outlined'
          name='discription'
          label='Discription about the Book'
          fullWidth
          value={postData.discription}
          onChange={e =>
            setPostData({ ...postData, discription: e.target.value })
          }
        />

        <div
          style={{
            display: 'flex'
          }}
        >
          <TextField
            name='keyword'
            variant='outlined'
            label='Keyword'
            fullWidth
            onChange={e =>
              setPostData({ ...postData, keywords: e.target.value })
            }
          />
        </div>
        
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          SUBMIT
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='secondary'
          size='small'
          onClick={e => clear(e)}
          fullWidth
        >
          CLEAR
        </Button>
      </form>
    </Paper>
  )
}
export default Registration

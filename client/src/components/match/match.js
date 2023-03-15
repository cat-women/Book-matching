import * as React from 'react'
import { useSelector } from 'react-redux'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Book () {
  const requestedBook = useSelector(state => state.requestedBook)
  const matchBook = useSelector(state => state.match)

  console.log('requestedBook', requestedBook)
  console.log('match book', matchBook)

  if (matchBook.length > 0) {
    return matchBook.map(book => (
      /**
       * name of book requested
       * who requeted when (list )
       */
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          padding: '10px',
          margin: '10px'
        }}
      >
        <ListItem alignItems='flex-center'>
          <ListItemAvatar>
            <Avatar
              alt='Remy Sharp'
              sx={{
                width: 100,
                height: 100,
                margin: '10px',
                padding: '10px  '
              }}
              variant='square'
              src={book.bookCover}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: '10px', margin: '10px', }}
            primary={book.bookTitle} 
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {book.bookAuthor}
                </Typography>
                ~ {book.bookDiscription}
              </React.Fragment>
            }
          />
          <div style={{ display: 'block' }}>
            <Button
              sx={{ padding: '10px', margin: '10px' }}
              style={{ color: 'red' }}
            >
              <DeleteIcon /> Cancel
            </Button>
          </div>
        </ListItem>
        <Divider variant='insert' component='li' />
      </List>
    ))
  }
}

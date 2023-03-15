import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Book (props) {
  const book = props.book

  return (
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
            sx={{ width: 100, height: 100, margin: '10px', padding: '10px  ' }}
            variant='square'
            src={book.image}
          />
        </ListItemAvatar>
        <ListItemText
          sx={{ padding: '10px', margin: '10px' }}
          primary={book.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                {book.author}
              </Typography>
              {book.discription}
            </React.Fragment>
          }
        />
        <div style={{ display: 'block' }}>
          <Button
            sx={{ padding: '10px', margin: '10px' }}
            style={{ color: 'red' }}
          >
            <DeleteIcon /> Delete
          </Button>
          <Button sx={{ padding: '10px', margin: '10px' }}>
            <DeleteIcon /> Edit
          </Button>
        </div>
      </ListItem>
      <Divider variant='insert' component='li' />
    </List>
  )
}

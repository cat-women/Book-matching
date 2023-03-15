import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import {
  createMatch,
  getMatch,
  getRequest,
  updateMatch
} from '../../actions/matchBook.js'

export default function AlertDialog (props) {
  const book = props.book
  const user = JSON.parse(localStorage.getItem('profile')).result
  const dispatch = useDispatch()
  const initialState = {
    claimantID: user._id,
    ownerId: book.ownerId,
    bookId: book._id
  }
  const [open, setOpen] = React.useState(props.open)
  const [postData, setpostData] = useState(initialState)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleConfirm = () => {
    dispatch(createMatch(postData))
    handleClose()
  }

  const handleCancel = () => {
    setpostData(initialState)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Request for match ?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Once you confirm to request book, request will be sent to owner. You
          can get book once owner accept it.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} style={{ color: 'red' }}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} autoFocus style={{ color: 'blue' }}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

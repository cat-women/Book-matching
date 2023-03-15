import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = (props) => {
  return (
    <Grid item xs={12} sm={props.half ? 6 : 12}>
      <TextField
        name={props.name}
        onChange={props.handleChange}
        varient='outlined'
        required
        fullWidth
        label={ props.label}
        autoFocus={props.autoFocus}
        type={props.type}
        value ={props.value}
        InputProps={
          props.name === 'password' ? {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={props.handleShowPassword}>
                  {props.type === 'passwprd' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          } : null
        }
      />
    </Grid>
  )
}

export default Input

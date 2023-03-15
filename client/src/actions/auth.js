import { AUTH } from './actionTypes.js'

import * as api from '../api'

export const signin = (formData, history) => async dispatch => {
  // use login
  try {
    const { data } = await api.signin(formData)
    dispatch({ type: AUTH, data })
    history('/')
  } catch (error) {
    console.log(error)
  }
}

export const signup = (formData, history) => async dispatch => {
  // use login
  try {
    const { data } = await api.signup(formData)
    dispatch({ type: AUTH, data })
    
    history('/')
  } catch (error) {
    console.log(error)
  }
}

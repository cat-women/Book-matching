import * as api from '../api'
import {
  ADD_MATCH,
  UPDATE_MATCH,
  GET_MATCH,
  GET_REQUEST
} from './actionTypes.js'

export const createMatch = newMatch => async dispatch => {
  try {
    const { data } = await api.addMatch(newMatch)
    dispatch({ type: ADD_MATCH, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const getRequest = id => async dispatch => {
  try {
    const { data } = await api.getRequest(id)
    dispatch({ type: GET_REQUEST, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const getMatch = id => async dispatch => {
  try {
    const { data } = await api.getMatch(id)
    dispatch({ type: GET_MATCH, payload: data })
  } catch (error) {
    console.log(error)
  }
}
export const update = (newMatch, id) => async dispatch => {
  try {
    const { data } = await api.updateMatch(newMatch, id)
    dispatch({ type: UPDATE_MATCH, payload: data })
  } catch (error) {
    console.log(error)
  }
}

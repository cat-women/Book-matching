import * as api from '../api'
import { FETCH_ALL, CREATE, FETCH_RECOM } from './actionTypes.js'
// action creators
export const getBooks = () => async dispatch => {
  try {
    const { data } = await api.fetchBooks()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error)
  }
}
export const getRecommendation = id => async dispatch => {
  try {
    const { data } = await api.fetchRecommdention(id)
    dispatch({ type: FETCH_RECOM, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createBook = book => async dispatch => {
  try {
    const { data } = await api.createBook(book)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

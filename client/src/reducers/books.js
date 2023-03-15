import { FETCH_ALL, CREATE, FETCH_RECOM } from '../actions/actionTypes'

export default (books = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...books, action.payload]
    default:
      return books
  }
}
export const recomReducer = (recom = [], action) => {
  switch (action.type) {
    case FETCH_RECOM:
      return action.payload

    default:
      return recom
  }
}

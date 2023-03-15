import {
  ADD_MATCH,
  UPDATE_MATCH,
  GET_MATCH,
  GET_REQUEST
} from '../actions/actionTypes.js'

const matchBookReducer = (state = { match: [] }, action) => {
  switch (action.type) {
    case ADD_MATCH:
      return { ...state, userProfile: action?.payload }
    case GET_MATCH:
      return action.payload
    case UPDATE_MATCH:
      return { ...state, userProfile: action?.payload }
    default:
      return state
  }
}
export const getRequestReducer = (state = { requestedBook: [] }, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return action.payload
    default:
      return state
  }
}
export default matchBookReducer

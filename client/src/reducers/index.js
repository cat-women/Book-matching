import { combineReducers } from 'redux'

import bookReducer, { recomReducer } from './books'
import authReducer from './auth.js'
import userProfileReducer from './userProfile.js'
import matchBookReducer, { getRequestReducer } from './matchBook.js'

export default combineReducers({
  authReducer: authReducer,
  books: bookReducer,
  recomendBook: recomReducer,
  profile: userProfileReducer,
  match: matchBookReducer,
  requestedBook: getRequestReducer
})

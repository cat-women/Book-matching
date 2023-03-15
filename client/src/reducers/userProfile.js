import {
  ADDPROFILE,
  UPDATEPROFILE,
  GETPROFILE
} from '../actions/actionTypes.js'

const userProfileReducer = (state = { userProfile: [] }, action) => {
  switch (action.type) {
    case ADDPROFILE:
      return { ...state, userProfile: action?.payload }
    case GETPROFILE:
      return action.payload
    case UPDATEPROFILE:
      return { ...state, userProfile: action?.payload }

    default:
      return state
  }
}
export default userProfileReducer

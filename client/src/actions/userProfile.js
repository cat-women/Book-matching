import * as api from '../api'
import { ADDPROFILE, UPDATEPROFILE, GETPROFILE} from './actionTypes.js'



export const getUserProfile = id => async dispatch => {
  try {
    const { data,status } = await api.fetchUserProfile(id)
    dispatch({ type: GETPROFILE, payload: data })
  } catch (error) {
    if(error.response.status === 404)
    dispatch({ type: GETPROFILE, payload: error.response.data })
    console.log(error)

  }
}

export const addUserProfile = userProfile => async dispatch => {
  try {
    const { data } = await api.addUserProfile(userProfile)
    dispatch({ type: ADDPROFILE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateUserProfile = (userProfile,id) => async dispatch => {
  try {
    const { data } = await api.updateUserProfile(userProfile,id)
    console.log("updated data",data)
    dispatch({ type: UPDATEPROFILE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

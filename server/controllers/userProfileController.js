import UserProfile from '../models/UserProfile.js'

export const addUserProfile = async (req, res) => {
  let userProfile = req.body
  try {
    const result = await UserProfile.create(userProfile)
    res.status(200).json({ result: result })
  } catch (error) {
    console.log(error)
  }
}

export const getUserProfile = async (req, res) => {
  let userId = req.params.id
  try {
    const result = await UserProfile.findOne({ userId })
    if (!result) res.status(404).json({ result: 'No profile set yet' })
    res.status(200).json({ result: result })
  } catch (error) {
    console.log(error)
  }
}

export const updatUserProfile = async (req, res) => {
  let filter = { userId: req.params.id }
  let update = req.body

  try {
    const result = await UserProfile.findOneAndUpdate(filter, update)
    if (!result) res.status(404).json({ result: 'No profile set yet' })

    res.status(200).json({ result: result })
    
  } catch (error) {
    console.log(error)
  }
}

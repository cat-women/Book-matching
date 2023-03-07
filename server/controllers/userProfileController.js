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
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

export const updatUserProfile = async (req, res) => {
  let filter = { userId: req.params.id }
  let { bookId, like } = req.body.likes

  if (bookId == null || like == null)
    res.status(400).json({ result: 'Not valid request' })

  try {
    let userProfile = await UserProfile.findOne(filter)
    let result
    // if preferemce exit create new
    if (userProfile) {
      let likes = userProfile.likes
      // if likes is not set
      if (likes.length == 0) likes = [{ bookId: bookId, like: like }]
      for (let i = 0; i < likes.length; i++) {
        // if particular book is already there, change like
        if (likes[i].bookId === bookId) likes[i].like = like
        // else push new book to likes
        else likes.push({ bookId: bookId, like: like })
      }

      result = await UserProfile.updateOne(filter, { likes: likes })
    } else
      result = await UserProfile.create({
        userId: req.params.id,
        like: [{ bookId: bookId, like: like }]
      })

    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
}

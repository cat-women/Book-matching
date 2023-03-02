import Preferences from '../models/Preferences.js'

export const addPreferences = async (req, res) => {
  try {
    const { userId, keywords } = req.body
    var array = keywords.split(',')
    let preferences = []
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].replace(/^\s*/, '').replace(/\s*$/, '')
      preferences.push(array[i])
    }
    const result = await Preferences.create({
      userId: userId,
      preferences: preferences
    })
    return res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: `Somethin wen wrong ${error.message}` })
  }
}

export const getPreferences = async (req, res, next) => {
  try {
    const userId = req.params.id
    const preferences = await Preferences.findOne({ userId: userId })

    if (!preferences)
      return res.status(404).json({ msg: 'You have not set preferences' })

    return res.status(200).json(preferences)
  } catch (error) {
    res.status(500).json({ msg: `Somethin wen wrong ${error.message}` })
  }
}

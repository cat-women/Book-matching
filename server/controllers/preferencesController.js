import Preferences from '../models/Preferences.js'

export const addPreferences = async (req, res) => {
  try {
    const { userId, pre } = req.body
    var array = pre.split(',')
    preferences = []
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
    const id = req.params.id
    const preferences = await Preferences.findById(id)

    if (!preferences)
      return res.status(404).json({ msg: 'You have not set preferences' })

    return res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ msg: `Somethin wen wrong ${error.message}` })
  }
}

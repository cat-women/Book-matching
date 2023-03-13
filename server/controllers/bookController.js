import Book from '../models/Book.js'
import recommendBooks from '../services/recomendBook.js'

export const addBook = async (req, res, next) => {
  const book = req.body
  try {
    const oldBook = await Book.findOne({
      title: book.title,
      author: book.author
    })
    if (oldBook)
      return res.status(400).json({ msg: 'This book already exits ' })

    const result = await Book.create(book)

    return res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ msg: `Somethin wen wrong ${error.message}` })
  }
}

export const getAllBook = async (req, res, next) => {
  try {
    const results = await Book.find()
    if (!results) return res.status(404).json({ msg: 'There is no book' })

    return res.status(200).json(results)
  } catch (error) {
    res.status(500).json({ msg: `Somethin wen wrong ${error.message}` })
  }
}
export const recommendation = async (req, res, next) => {
  try {
    const results = await recommendBooks(req.params.id)
    if (!results)
      res.status(404).json({ message: 'Recommedataion not set yest' })
    res.status(200).json(results)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
export const getBook = async (req, res, next) => {
  const id = req.params.id
  try {
    const book = await Book.findById(id)

    if (!book) return res.status(404).json({ msg: 'This book doesnot exits ' })

    return res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ msg: `Somethin wen wrong ${error.message}` })
  }
}

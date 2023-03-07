import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Book from '../models/Book.js'

export const addBook = async (req, res, next) => {
  const book = req.body
  try {
    const oldBook = await Book.findOne({title: book.title,author: book.author })
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
    const books = await Book.find()

    if (!books) return res.status(404).json({ msg: 'There is no book' })

    return res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ msg: `Somethin wen wrong ${error.message}` })
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
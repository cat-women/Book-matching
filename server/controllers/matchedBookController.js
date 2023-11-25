import mongoose from 'mongoose'

import MatchedBook from '../models/MatchedBook.js'
import Book from '../models/Book.js'
import User from '../models/User.js'
import UserProfile from '../models/UserProfile.js'

export const addMatch = async (req, res, next) => {
  const bookId = req.params.id

  try {
    const book = await Book.findById(bookId)

    if (!book) return res.status(404).json({ message: 'Book does not exist' })

    // check if match already place
    const oldBook = await MatchedBook.findOne({
      bookId: bookId,
      claimantID: req.user.id
    })


    if (oldBook) return res.status(400).json({ message: 'Match request already send' })

    const result = await MatchedBook.create({
      claimantID: mongoose.Types.ObjectId(req.user.id),
      bookId: book._id,
      ownerId: book.ownerId
    })

    return res.status(200).json(result)
  } catch (error) {
    console.log('error', error)
    next(error)
  }
}
// woner : request for book
export const getRequestedMatch = async (req, res, next) => {

  MatchedBook.aggregate([
    {
      $match: {
        ownerId: mongoose.Types.ObjectId(req.user?.id)
      }
    },
    {
      $lookup: {
        from: Book.collection.name,
        localField: 'bookId',
        foreignField: '_id',
        as: 'book'
      }
    },
    {
      $unwind: '$book'
    },
    {
      $lookup: {
        from: User.collection.name,
        localField: 'claimantID',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      $unwind: '$user'
    },
    {
      $project: {
        _id: 1,
        title: '$book.title',
        author: '$book.author',
        discription: '$book.discription',
        image: '$book.image',
        owner: '$user.name'
      }
    }
  ]).exec((err, results) => {
    if (err) {
      console.log('error', error)
      next(error)
    } else {
      if (!results)
        return res.status(404).json({ message: 'This matched does not exit' })

      return res.status(200).json(results)
    }
  })
}

export const getMatch = (req, res, next) => {
  var id = mongoose.Types.ObjectId(req.params.id)

  MatchedBook.aggregate([
    {
      $match: {
        claimantID: id
      }
    },
    {
      $lookup: {
        from: Book.collection.name,
        localField: 'bookId',
        foreignField: '_id',
        as: 'book'
      }
    },
    {
      $unwind: '$book'
    },
    {
      $lookup: {
        from: User.collection.name,
        localField: 'ownerId',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      // $unwind stage to flatten the book and user arrays that are created by the $lookup stage
      $unwind: '$user'
    },
    {
      //  $project stage to select the book.title and user.name fields and rename them to bookTitle and userName, respectively.

      $project: {
        _id: 1,
        bookTitle: '$book.title',
        bookAuthor: '$book.author',
        bookDiscription: '$book.discription',
        bookCover: '$book.image',
        userName: '$user.name'
      }
    }
  ]).exec((err, results) => {
    if (err) {
      console.log('error', error)
      next(error)
    } else {
      if (!results)
        res.status(404).json({ message: 'This matched does not exit' })
      res.status(200).json(results)
    }
  })
}

export const match = async (req, res, next) => {
  const id = req.params.id
  try {
    let match = await MatchedBook.findById(id)
    if (!match) res.status(404).json({ message: 'Request does not exit' })
    // change book owner to claimant
    const book = Book.findOneAndUpdate(
      { _id: match.bookId },
      { ownerId: match.claimantID, availbility: 0 }
    )
    if (!book) res.status(404).json({ message: 'Book does not exist' })
    // update macth status
    match = await MatchedBook.updateOne({ _id: id }, { status: 1 })

    // update user profile
    UserProfile.findOneAndUpdate(
      { userId: match.claimantID },
      { $push: { decision: book.category } }
    )
  } catch (error) {
    console.log('error', error)
    next(error)
  }
}

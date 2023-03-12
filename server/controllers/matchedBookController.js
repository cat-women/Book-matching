import MatchedBook from '../models/MatchedBook.js'
import Book from '../models/Book.js'
import User from '../models/User.js'
import UserProfile from '../models/UserProfile.js'

export const addMatch = async (req, res, next) => {
  const newMatch = req.body
  try {
    const book = await Book.findById(newMatch.bookId)
    if (!book) res.status(404).json({ message: 'Book does not exist' })

    // check if match already place
    const oldBook = await MatchedBook.findOne({
      bookId: newMatch.bookId,
      claimantID: newMatch.claimantID
    })
    if (oldBook) res.status(400).json({ message: 'Match request already send' })

    const result = await MatchedBook.create(newMatch)
    res.status(200).json(result)
  } catch (error) {
    console.log('error', error)
    next(error)
  }
}
export const getRequestedMatch = (req, res, next) => {
  const id = req.params.id
  MatchedBook.aggregate([
    {
      $match: {
        ownerId: id
      }
    },
    {
      $lookup: {
        from: User.collection.name,
        localField: 'claimantID',
        foreignField: '_id',
        as: 'user'
      }
    },
    { $unwind: '$user' },
    {
      $lookup: {
        from: Book.ser.collection.name,
        localField: 'bookId',
        foreignField: '_id',
        as: 'book'
      }
    },
    { $unwind: '$book' },
    {
      $project: {
        _id: 0,
        bookTitle: '$book.title',
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

export const getMatch = (req, res, next) => {
  const id = req.params.id

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
        _id: 0,
        bookTitle: '$book.title',
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

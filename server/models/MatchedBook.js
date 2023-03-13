import mongoose from 'mongoose'
import Book from './Book.js'
import User from './User.js'

var Schema = mongoose.Schema

const matchedBookSchema = mongoose.Schema(
  {
    id: { type: String },
    claimantID: {
      type: Schema.ObjectId,
      ref: User,
      required: true
    },
    ownerId: {
      type: Schema.ObjectId,
      ref: User,
      required: true
    },
    bookId: {
      type: Schema.ObjectId,
      ref: Book,

      required: true
    },
    // 0 : pending , 1: settled
    status: {
      type: Boolean,
      default: 0
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

export default mongoose.model('MatchedBook', matchedBookSchema)

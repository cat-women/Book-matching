import mongoose from 'mongoose'
import joi from 'joi'

const bookSchema = mongoose.Schema(
  {
    id: { type: String },
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
      unique: true
    },
    ownerId: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255
    },
    category: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255
    },
    discription: {
      type: String,
      required: true,
      minlength: 10
    },
    image: {
      type: String
    },
    keywords: {
      type: [String]
    },
    availbility: {
      type: Boolean,
      default: 1
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

export default mongoose.model('Book', bookSchema)

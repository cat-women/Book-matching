import mongoose from 'mongoose'
import joi from 'joi'

const userSchema = mongoose.Schema(
  {
    id: { type: String },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255
    },
    contact: {
      type: Number,
      required: true,
      unique: true
    },
    email: {
      type: String,
      require: true,
      unique: true,
      minlength: 5,
      maxlength: 255
    },
    password: {
      type: String,
      require: true,
      minlength: 5,
      maxlength: 255
    },
    userType: { type: String, default: 'guest' },
    point: {
      type: Number,
      default: 0
    }
  },

  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

export default mongoose.model('Users', userSchema)

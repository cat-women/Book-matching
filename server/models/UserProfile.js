import mongoose from 'mongoose'
import joi from 'joi'

const profileSchema = mongoose.Schema(
  {
    id: { type: String },
    userId: {
      type: String,
      required: true
    },
    behaviour: {
      type: Object
    }
  },

  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

export default mongoose.model('UserProfile', profileSchema)

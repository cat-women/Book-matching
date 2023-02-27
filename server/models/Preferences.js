import mongoose from 'mongoose'
import joi from 'joi'

const preferencesSchema = mongoose.Schema(
  {
    id: { type: String },
    userId: {
      type: String,
      required: true,
    },
    preferences: {
      type: [String],
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

export default mongoose.model('Preferences', preferencesSchema)

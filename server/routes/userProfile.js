import express from 'express'

import {
  addUserProfile,
  getUserProfile,
  updatUserProfile
} from '../controllers/userProfileController.js'

const router = express.Router()

router.post('/', addUserProfile)
router.get('/:id', getUserProfile)
router.put('/:id', updatUserProfile)

export default router

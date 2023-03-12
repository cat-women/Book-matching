import express from 'express'
import { signup, signin } from '../controllers/userController.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)

export default router

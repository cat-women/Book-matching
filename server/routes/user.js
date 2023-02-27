import express from 'express'
import { signup, signin } from '../controllers/userController.js'
import auth from '../middleware/auth.js'
import {addPreferences} from'../controllers/preferencesController.js'
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/preferences/:id', addPreferences)

export default router

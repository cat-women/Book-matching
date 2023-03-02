import express from 'express'
import { signup, signin } from '../controllers/userController.js'
import auth from '../middleware/auth.js'
import {addPreferences,getPreferences} from'../controllers/preferencesController.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/preferences', addPreferences)
router.get('/preferences/:id', getPreferences)

export default router

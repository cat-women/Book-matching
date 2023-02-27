import express from 'express'
import { addBook, getAllBook, getBook } from '../controllers/bookController.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/', addBook)
router.get('/', getAllBook)
router.get(`/:id`, getBook)

export default router

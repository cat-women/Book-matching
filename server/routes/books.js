import express from 'express'
import {
  addBook,
  getAllBook,
  getBook,
  recommendation
} from '../controllers/bookController.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/', addBook)
router.get('/', getAllBook)
router.get('/recom/:id', recommendation)

router.get(`/:id`, getBook)

export default router

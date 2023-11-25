import express from 'express'
import auth from '../middleware/auth.js'
import {
  addMatch,
  getMatch,
  getRequestedMatch,
  match
} from '../controllers/matchedBookController.js'

const router = express.Router()

router.post('/:id', auth, addMatch)
// all the book requested :claimant
router.get('/getMatch/:id', getMatch)
// all the request for a book: owner 
router.get('/getRequest',auth, getRequestedMatch)
// match
router.put('/:id', match)

export default router

import express from 'express'

import {
  addMatch,
  getMatch,
  getRequestedMatch,
  match
} from '../controllers/matchedBookController.js'

const router = express.Router()

router.post('/', addMatch)
// all the book requested :claimant
router.get('/getMatch/:id', getMatch)
// all the request for a book: owner 
router.get('/getRequest/:id', getRequestedMatch)
// match
router.put('/:id', match)

export default router

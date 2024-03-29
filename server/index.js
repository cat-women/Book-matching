import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import ErrorHandler from './middleware/errorHandler.js'
import postRouter from './routes/posts.js'
import user from './routes/user.js'
import books from './routes/books.js'
import userProfile from './routes/userProfile.js'
import matchBook from './routes/matchBook.js'
import bookRecommend from './services/recomendBook.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


app.use('/posts', postRouter)
app.use('/users', user)
app.use('/books', books)
app.use('/userProfile', userProfile)
app.use('/matchBook', matchBook)

// erro handler
app.use(ErrorHandler)

const PORT = process.env.PORT || 8000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Connected to database. \nServer running on port ${PORT}`))
  )
  .catch(err => console.log(err.message))

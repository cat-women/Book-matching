import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRouter from './routes/posts.js'
import user from './routes/user.js'
import books from './routes/books.js'
import userProfile from './routes/userProfile.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRouter)
app.use('/users', user)
app.use('/books', books)
app.use('/userProfile', userProfile)

// Mongodb Connection

const PORT = process.env.PORT || 8000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch(err => console.log(err.message))

// mongoose.set('useFindAndModofy', false)

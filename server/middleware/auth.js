import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split('')[1]
    if (token) {
      const decodeData = jwt.verify(token, 'test')
      req.useId = decodeData?.id
    }
    next()
  } catch (error) {
    console.log(error)
  }
}

export default auth
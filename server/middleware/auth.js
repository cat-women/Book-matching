import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      const decodeData = jwt.verify(token, 'test')
      req.user = decodeData
    }
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });

  }
}

export default auth
import User from '../models/User.js'
import mongoose from 'mongoose'

export class UserService {
  async postUser (data) {
    const user = new User(data)
    user.save()
    return true
  }
}

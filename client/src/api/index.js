import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' })

// user
export const signin = formData => API.post('/users/signin', formData)
export const signup = formData => API.post('/users/signup', formData)

// Books
export const fetchBooks = () => API.get('/books')
export const createBook = newBook => API.post('/books', newBook)
export const fetchRecommdention = id=> API.get(`/books/recom/${id}`)

// userProfile
export const addUserProfile = userProfile =>
  API.post(`/userProfile`, userProfile)
export const fetchUserProfile = id => API.get(`/userProfile/${id}`)
export const updateUserProfile = (userProfile, id) =>
  API.put(`/userProfile/${id}`, userProfile)

// matchbook
export const addMatch = newMatch => API.post('/matchBook', newMatch)
export const getRequest = id => API.get(`/matchBook/getRequest/${id}`)
export const getMatch = id => API.get(`/matchBook/getMatch/${id}`)
export const updateMatch = (update,id) => API.put(`/matchBook/getMatch/${id}`)

import UserProfile from '../models/UserProfile.js'
import MatchedBook from '../models/MatchedBook.js'
import Book from '../models/Book.js'

const RECOMMENDATION_COUNT = 10

// Function to recommend books to a particular user
async function recommendBooks (userId) {
  try {
    // Retrieve the user's profile from the database
    const userProfile = await UserProfile.findOne({ userId })

    // Extract keywords from the user's profile
    const userKeywords = userProfile.keywords[0]
      .split(',')
      .map(item => item.trim().toLowerCase())


    const likedBooksIds = userProfile.likes.filter(book => book.like === true)

    // Retrieve a list of matched books from the database
    const allBooks = await Book.find()

    // Filter out irrelevant books based on user keywords
    let relevantBooks = allBooks.filter(book => {
      const bookKeywords = book.keywords
        .split(',')
        .map(item => item.trim().toLowerCase())

      return userKeywords.some(keyword =>
        bookKeywords.includes(keyword.toLowerCase())
      )
    })

    // Compute similarity scores for each book
    const bookScores = relevantBooks.map(book => {
      const bookKeywords = book.keywords
        .split(',')
        .map(item => item.trim().toLowerCase())

      const similarityScore = computeSimilarityScore(userKeywords, bookKeywords)
      return { book, similarityScore }
    })

    // Sort the list of books by their similarity score in descending order
    bookScores.sort((a, b) => b.similarityScore - a.similarityScore)

    // Return the top N books from the sorted list
    const recommendedBooks = bookScores
      .slice(0, RECOMMENDATION_COUNT)
      .map(bookScore => {
        return bookScore.book
      })
    return recommendedBooks
  } catch (error) {
    console.log('error', error)
  }
}

// Function to compute similarity score between two sets of keywords
function computeSimilarityScore (setA, setB) {
  const intersection = new Set([...setA].filter(x => setB.includes(x)))
  const union = new Set([...setA, ...setB])
  return intersection.size / union.size
}

export default recommendBooks

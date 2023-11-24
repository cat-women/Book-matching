import React from "react"
import { Button } from "react-bootstrap";
import './style.css'

const books = [
     {
          name: 'Book 1',
          image: 'book1.jpg',
          author: 'Author 1',
          description: 'A short description of Book 1.',
     },
     {
          name: 'Book 2',
          image: 'book2.jpg',
          author: 'Author 2',
          description: 'A short description of Book 2.',
     },
     {
          name: 'Book 1',
          image: 'book1.jpg',
          author: 'Author 1',
          description: 'A short description of Book 1.',
     },
     {
          name: 'Book 2',
          image: 'book2.jpg',
          author: 'Author 2',
          description: 'A short description of Book 2.',
     },{
          name: 'Book 1',
          image: 'book1.jpg',
          author: 'Author 1',
          description: 'A short description of Book 1.',
     },
     {
          name: 'Book 2',
          image: 'book2.jpg',
          author: 'Author 2',
          description: 'A short description of Book 2.',
     },
];
export default function Books() {
     return (
          <div className="book-list">
               {books.map((book, index) => (
                    <div key={index} className="book-card">
                         <img src={book.image} alt={book.name} className="book-image" />
                         <h3>{book.name}</h3>
                         <p>Author: {book.author}</p>
                         <p>{book.description}</p>
                         <Button>Read more</Button>
                    </div>
               ))}
          </div>
     )
}
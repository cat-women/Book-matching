import React from "react"
import { Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import './style.css'

export default function Books() {
     const { books, loading, error } = useSelector((state) => state.books);

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
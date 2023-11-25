import React from "react"
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { requestBookAsync } from "../../features/services/matchBook";

export default function Books({ books, loading, error, requestedBook }) {
     // const { books, loading, error } = useSelector((state) => state.books);
     const dispatch = useDispatch()
     const handleRequest = (id) => {
          dispatch(requestBookAsync(id));
          alert("Processing")

     };

     const handleSave = (book) => {
          localStorage.setItem('book', book)
          alert("Book is saved")
     };
     if (loading || !books) return <h5>Loading ....</h5>

     return (
          <div className="book-list">
               {books.map((book, index) => (
                    <div key={index} className="book-card">
                         <img src={book.image} alt={book.name} className="book-image" />
                         <h2>{book.title}</h2>
                         <h5>Author: {book.author}</h5>
                         <p>{book.discription}</p>
                         {!requestedBook &&
                              <div className="book-buttons">
                                   <Button onClick={(e) => handleRequest(book._id)} className="buy-button">
                                        Buy
                                   </Button>
                                   <Button onClick={(e) => handleSave(book)} className="save-button">
                                        Save
                                   </Button>
                              </div>
                         }
                         {requestedBook &&
                              <div className="book-buttons">
                                   <Button onClick={(e) => handleRequest(book._id)} className="buy-button">
                                        Approved
                                   </Button>
                                   <Button onClick={(e) => handleSave(book)} className="save-button">
                                        Cancel
                                   </Button>
                              </div>
                         }
                    </div>
               ))}
          </div>
     )
}
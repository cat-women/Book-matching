import React from 'react';
import './style.css';
const book =
{
     name: 'Book 1',
     image: 'book1.jpg',
     author: 'Author 1',
     description: 'A short description of Book 1.',
}
const Book = ({ id, name, image, author, description, onBuy, onSave }) => {
     const handleBuy = () => {
          onBuy(id);
     };

     const handleSave = () => {
          onSave(id);
     };

     return (
          <div className="book-card">
               <img src={image} alt={name} className="book-image" />
               <h3>{book.name}</h3>
               <p>Author: {book.author}</p>
               <p>{book.description}</p>
               <div className="book-buttons">
                    <button onClick={handleBuy} className="buy-button">
                         Buy
                    </button>
                    <button onClick={handleSave} className="save-button">
                         Save
                    </button>
               </div>
          </div>
     );
};

export default Book;

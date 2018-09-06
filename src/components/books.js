import React from 'react';
import Book from "./book";

const Books = ({books, handleAddToCart}) => {
  const bookMap = books.map((book) =>
    (<Book key={book._id} book={book} handleAddToCart={handleAddToCart}/>));
  return (
    <div className="row">
      {bookMap}
    </div>
  );
};

export default Books;
import React from 'react';
import Book from "./book";

const Books = ({books}) => {
  const bookMap = books.map((book) =>
    (<Book key={book._id} book={book}/>));
  return (
    <div className="row">
      {bookMap}
    </div>
  );
};

export default Books;
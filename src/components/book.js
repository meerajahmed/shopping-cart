import React from 'react';
import numeral from 'numeral';

const Book = (props) => {
  return (
    <div className="col-md-4 col-lg-6">
      <div className="card text-center shadow mb-5 rounded">
        <img className="card-img-top" src={props.book.imagePath} alt={props.book.subtitle} />
        <div className="card-body text-primary">
          <h5 className="card-title">{props.book.title}</h5>
          <p className="card-text">{props.book.subtitle}</p>
        </div>
        <div className="mb-4 mx-3 pt-3 border-top">
          <p className="text-primary">{numeral(props.book.price).format('$0,0.00')}</p>
          <button
            className="btn btn-primary"
            onClick={() => props.handleAddToCart(props.book)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
};

export default Book;
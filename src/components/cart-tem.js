import React from 'react';
import numeral from 'numeral';

const CartItem = (props) => {
  return (
    <div className="row mt-3">
      <div className="col-lg-12">
        <div className="card shadow mb-3 rounded border-light">
          <div className="card-body text-primary">
            <div className="row">
              <div className="col-lg-4">
                <img className="card-img-top" src={props.cartItem.book.imagePath}
                     alt={props.cartItem.book.subtitle}/>
              </div>
              <div className="col-lg-4">
                <h5 className="card-title">{props.cartItem.book.title}</h5>
                <p className="card-text">{props.cartItem.book.subtitle}</p>
                <h5 className="mt-4">Price: {numeral(props.cartItem.book.price).format('$0,0.00')}</h5>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Quantity</label>
                  <select value={props.cartItem.quantity}
                          onChange={(event) => props.handleQtyChange(props.cartItem._id, event.target.value)}
                          className="form-control">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                <h5 className="mt-3">Total: {getTotal(props.cartItem.book.price, props.cartItem.quantity)}</h5>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => props.handleRemoveFromCart(props.cartItem._id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const getTotal = (price, quantity) => numeral(price).multiply(quantity).format('$0,0.00');

export default CartItem;
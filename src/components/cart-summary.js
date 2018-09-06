import React from 'react';
import numeral from "numeral";

const CartSummary = (props) => {
  return (
    <div className="row mt-3">
      <div className="col-lg-12">
        <div className="card shadow mb-3 rounded border-light">
          <div className="card-body text-primary">
            <div className="row">
              <div className="col-lg-9">
                <h5 className="mt-2">
                  You have {props.cartItemsCount} item for a total
                  of {numeral(props.cartTotal).format('$0,0.00')} in your cart.
                </h5>
              </div>
              <div className="col-lg-3">
                <button className="btn btn-primary btn-block">
                  Checkout
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default CartSummary;
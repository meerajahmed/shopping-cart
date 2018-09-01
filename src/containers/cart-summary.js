import React from 'react';

const CartSummary = (props) => {
  return (
    <div className="row mt-3">
      <div className="col-lg-12">
        <div className="card shadow mb-3 rounded border-light">
          <div className="card-body text-primary">
            <div className="row">
              <div className="col-lg-9">
                <h5 className="mt-2">You have 1 item for a total of $123 in your cart</h5>
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
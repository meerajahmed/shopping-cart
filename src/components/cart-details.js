import React, {Component} from 'react';
import CartItem from "./cart-tem";
import CartSummary from "../containers/cart-summary";

export default class CartDetails extends Component {
  render() {
    const cartItems = this.props.cartItems.map((cartItem) =>
      <CartItem
        key={cartItem._id}
        cartItem={cartItem}
        handleQtyChange={this.props.handleQtyChange}
        handleRemoveFromCart={this.props.handleRemoveFromCart}/>
    );
    return (
      <div className="mt-5">
        <CartSummary />
        {cartItems}
      </div>
    );
  }
}
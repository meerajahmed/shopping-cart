import {connect} from "react-redux";
import {removeFromCart, updateCartItem} from "../actions/cart";
import CartDetails from "../components/cart-details";
import {selectAllCartItems} from "../selectors/cart";
import {selectBook} from "../selectors/books";

const mapStateToProps = (state) => {
  let cartItems = selectAllCartItems(state);
  cartItems = cartItems.map((cartItem) => ({
    ...cartItem,
    book: selectBook(state, cartItem.bookId)
  }));
  return {cartItems};
};

const mapDispatchToProps = (dispatch) => ({
  handleQtyChange: (cartId, quantity) => dispatch(updateCartItem(cartId, quantity)),
  handleRemoveFromCart: (cartId) => dispatch(removeFromCart(cartId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
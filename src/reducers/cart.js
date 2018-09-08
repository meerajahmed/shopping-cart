import {REMOVE_AUTH_TOKEN, SET_AUTH_TOKEN} from "../actions/auth";
import {ADD_CART_ITEM, ADD_CART_ITEMS, REMOVE_CART_ITEM, REMOVE_CART_ITEMS, UPDATE_CART} from "../actions/cart";

export default (state = [], {type, payload}) => {
  switch (type) {
    case ADD_CART_ITEM:
      return [...state, {...payload.cartItem}];

    case ADD_CART_ITEMS:
      return [...payload.cartItems];

    case REMOVE_CART_ITEM:
      return state.filter((cartItem) => (cartItem._id !== payload.cartId));

    case REMOVE_CART_ITEMS:
      return [];

    case UPDATE_CART:
      return state.map((cartItem) => {
        if (cartItem._id === payload.cartId) {
          cartItem.quantity = payload.quantity;
        }
        return cartItem;
      });

    default:
      return state;
  }
};

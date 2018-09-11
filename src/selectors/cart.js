import {selectBook} from "./books";
import numeral from 'numeral';

export const cartItemsCount = ({cart}) => cart.length;

export const cartTotal = function (state) {
  const cartItems = selectAllCartItems(state);
  return cartItems.map(({bookId, quantity}) => {
    const {price} = selectBook(state, bookId);
    return price * quantity;
  }).reduce((acc, cur) => acc + cur, 0);
};

export const selectAllCartItems = ({cart}) => cart;
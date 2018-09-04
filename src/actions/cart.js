export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = (book, quantity = 1) => ({
  type: ADD_TO_CART,
  payload: {
    book,
    quantity
  }
});

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const removeFromCart = (cartId) => ({
  type: REMOVE_FROM_CART,
  payload: {cartId}
});

export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const removeCartItem = (cartId) => ({
  type: REMOVE_CART_ITEM,
  payload: {cartId}
});

export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const addCartItem = (cartItem) => ({
  type: ADD_CART_ITEM,
  payload: {cartItem}
});

export const ADD_CART_ITEMS = 'ADD_CART_ITEMS';
export const addCartItems = (cartItems) => ({
  type: ADD_CART_ITEMS,
  payload: {cartItems}
});

export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS';
export const removeCartItems = () => ({
  type: REMOVE_CART_ITEMS
});

export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const updateCartItem = (cartId, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: {cartId, quantity}
});

export const UPDATE_CART = 'UPDATE_CART';
export const updateCart = (cartId, quantity) => ({
  type: UPDATE_CART,
  payload: {cartId, quantity}
});
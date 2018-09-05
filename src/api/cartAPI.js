import axios from 'axios';

export const addToCartAPI = ({bookId, quantity, authToken}) =>
  axios.post('http://localhost:3000/carts',
    {bookId, quantity},
    {headers: {'Content-Type': 'application/json', 'x-auth': authToken}})
    .then(response => response.data)
    .catch(err => {
      throw err;
    });

export const fetchCartAPI = (authToken) =>
  axios.get('http://localhost:3000/carts',
    {headers: {'Content-Type': 'application/json', 'x-auth': authToken}})
    .then(response => response.data)
    .catch(err => {
      throw err;
    });


export const updateCartAPI = ({cartId, quantity, authToken}) =>
  axios.put(`http://localhost:3000/carts/${cartId}`,
    {quantity},
    {headers: {'Content-Type': 'application/json', 'x-auth': authToken}})
    .then(response => response.data)
    .catch(err => {
      throw err;
    });

export const removeFromCartAPI = ({cartId, authToken}) =>
  axios.delete(`http://localhost:3000/carts/${cartId}`,
    {headers: {'Content-Type': 'application/json', 'x-auth': authToken}})
    .then(response => response.data)
    .catch(err => {
      throw err;
    });




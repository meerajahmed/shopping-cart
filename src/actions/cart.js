export const GET_BOOKS = 'GET_BOOKS';
export const getBooks = () => ({
  type: GET_BOOKS
});

export const SET_BOOKS = 'SET_BOOKS';
export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: {books}
});

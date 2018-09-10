export const selectAllBooks = ({books}) => books;

// search books without category
export const selectBooks = ({books}, searchText) => {
  const text = searchText.toLowerCase();
  return books.filter((book) => (!text || book.title.toLowerCase().indexOf(text) > -1));
};

// search books with category
export const selectVisibleBooks = ({books}, searchText, searchCategory) => {
  const text = searchText.toLowerCase();
  return books.filter((book) => ((!searchCategory || book.category === searchCategory) &&
  (!text || book.title.toLowerCase().indexOf(text) > -1)));
};


export const selectBook = ({books}, bookId) => books.find(({_id}) => _id === bookId);




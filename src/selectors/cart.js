export const selectAllBooks = ({books}) => books;

export const selectBooks = ({books}, searchText, searchCategory) => {
  const text = searchText.toLowerCase();
  return books.filter((book) => ((!searchCategory || book.category === searchCategory) &&
  (!text || book.title.toLowerCase().indexOf(text) > -1)));
};


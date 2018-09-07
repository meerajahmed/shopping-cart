import {connect} from "react-redux";
import Dashboard from "../components/dashboard";
import {selectBooks, selectVisibleBooks} from "../selectors/books";
import {getBooks} from "../actions/books";
import {categoryChange, searchInputChange, setSearchCategory} from "../actions/search";
import {getSearchCategory, getSearchText} from "../selectors/search";
import {addToCart} from "../actions/cart";

const mapStateToProps = (state) => {
  const searchText = getSearchText(state);
  const searchCategory = getSearchCategory(state);
  const books = selectBooks(state, searchText);
  const visibleBooks = selectVisibleBooks(state, searchText, searchCategory);
  return {
    searchText,
    searchCategory,
    books,
    visibleBooks
  }
};

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => dispatch(getBooks()),
  handleSearchInputChange: (searchText) => dispatch(searchInputChange(searchText)),
  handleAddToCart: (book) => dispatch(addToCart(book)),
  handleCategoryChange: (category) => dispatch(setSearchCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
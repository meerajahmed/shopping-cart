import {connect} from "react-redux";
import Dashboard from "../components/dashboard";
import {selectBooks} from "../selectors/books";
import {getBooks} from "../actions/books";
import {searchInputChange} from "../actions/search";
import {getSearchCategory, getSearchText} from "../selectors/search";
import {addToCart} from "../actions/cart";

const mapStateToProps = (state) => {
  const searchText = getSearchText(state);
  const searchCategory = getSearchCategory(state);
  const books = selectBooks(state, searchText, searchCategory);
  return {
    searchText,
    searchCategory,
    books
  }
};

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => dispatch(getBooks()),
  handleSearchInputChange: (searchText) => dispatch(searchInputChange(searchText)),
  handleAddToCart: (book) => dispatch(addToCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
import React, {Component} from 'react';
import Books from "./books";
import SearchBar from "./search-bar";
import Categories from "./categories";

export default class Dashboard extends Component {

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
        <div className="row my-5">
          <div className="col-lg-4">
            <SearchBar
              searchText={this.props.searchText}
              handleSearchInputChange={this.props.handleSearchInputChange} />
            <Categories
              books={this.props.books}
              searchCategory={this.props.searchCategory}
              handleCategoryChange={this.props.handleCategoryChange}
            />
          </div>
          <div className="col-lg-8">
            <Books
              books={this.props.visibleBooks}
              searchText={this.props.searchText}
              handleAddToCart={this.props.handleAddToCart}
            />
          </div>
        </div>
    );
  }
}
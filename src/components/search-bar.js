import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: props.searchText
    };
  }

  handleChange = (searchText) => {
    this.setState(() => ({searchText}));
    this.props.handleSearchInputChange(searchText);
  };

  render() {
    return (
      <form>
        <div className="input-group input-group-lg">
          <input type="text" placeholder="Search Books..."
                 className="form-control shadow p-3 mb-4 bg-white rounded border-0" value={this.state.searchText}
                 onChange={(event) => this.handleChange(event.target.value)}/>
        </div>
      </form>
    );
  }
}

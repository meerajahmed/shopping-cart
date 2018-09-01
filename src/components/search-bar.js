import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: props.filterText
    };
  }

  handleChange = (filterText) => {
    this.setState(() => ({filterText}));
    this.props.onFilterTextChange(filterText);
  };

  render() {
    return (
      <form>
        <div className="input-group input-group-lg">
          <input type="text" placeholder="Search Category"
                 className="form-control" value={this.state.filterText}
                 onChange={(event) => this.handleChange(event.target.value)}/>
        </div>
      </form>
    );
  }
}

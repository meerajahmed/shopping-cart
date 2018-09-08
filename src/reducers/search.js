import {SET_SEARCH_CATEGORY, SET_SEARCH_TEXT} from "../actions/search";
const defaultState = {
  searchText: '',
  searchCategory: ''
};

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case SET_SEARCH_TEXT:
      const {searchText} = payload;
      return {
        ...state,
        searchText
      };

    case SET_SEARCH_CATEGORY:
      let {searchCategory} = payload;
      searchCategory = (searchCategory !== state.searchCategory ) ?
        searchCategory : '';
      return {
        ...state,
        searchCategory
      };

    default:
      return state;
  }
};

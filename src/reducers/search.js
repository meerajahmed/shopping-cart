const defaultState = {
  searchText: '',
  category: ''
};

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'SET_SEARCH_TEXT':
      const {searchText} = payload;
      return {
        ...state,
        searchText
      };
    default:
      return state;
  }
};

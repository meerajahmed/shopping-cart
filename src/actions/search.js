
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const searchInputChange = (searchText) => ({
  type: SEARCH_INPUT_CHANGE,
  payload: {searchText}
});

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const setSearchText = (searchText) => ({
  type: SET_SEARCH_TEXT,
  payload: {searchText}
});

export const SET_SEARCH_CATEGORY = 'SET_SEARCH_CATEGORY';
export const setSearchCategory = (searchCategory) => ({
  type: SET_SEARCH_CATEGORY,
  payload: {searchCategory}
});


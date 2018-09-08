import {SET_BOOKS} from "../actions/books";

export default (state = [], {type, payload}) => {
  switch (type) {
    case SET_BOOKS:
      const {books} = payload;
      return [...books];
    default:
      return state;
  }
};
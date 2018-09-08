import {REMOVE_AUTH_TOKEN, SET_AUTH_TOKEN} from "../actions/auth";

export default (state = {}, {type, payload}) => {
  switch (type) {
    case SET_AUTH_TOKEN:
      const {token} = payload;
      return {token};

    case REMOVE_AUTH_TOKEN:
      return {};
    default:
      return state;
  }
};

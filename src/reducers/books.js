import {SET_USER_INFO, REMOVE_USER_INFO} from "../actions/user";

export default (state = {}, {type, payload = {}}) => {
  switch (type) {
    case SET_USER_INFO:
      console.log(payload);
      const {firstName, email} = payload;
      return {
        firstName,
        email
      };
    case REMOVE_USER_INFO:
      return {};
    default:
      return state;
  }
};
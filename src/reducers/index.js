import {INCREMENT} from "../actions/increment";
import {DECREMENT} from "../actions/decrement";

export default (state, {type}) => {

  switch (type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}
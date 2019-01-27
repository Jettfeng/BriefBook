import * as constants from "./constants";
const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // return {
    //   focused: true
    // };
    return { ...state, focused: true };
  }
  if (action.type === constants.SEARCH_BLUR) {
    // return {
    //   focused: false
    // };
    return { ...state, focused: false };
  }
  return state;
};

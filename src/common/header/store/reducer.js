import * as constants from "./constants";
import { fromJS } from "immutable";
// fromJS:把js对象转换为immutable对象
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // return {
    //   focused: true
    // };
    // return { ...state, focused: true };
    // immutable对象的get方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
    return state.set("focused", true);
  }
  if (action.type === constants.SEARCH_BLUR) {
    // return {
    //   focused: false
    // };
    // return { ...state, focused: false };
    return state.set("focused", false);
  }
  if (action.type === constants.CHANGE_LIST) {
    return state.set("list", action.data);
  }
  return state;
};

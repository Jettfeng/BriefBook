import {
  GET_INIT_LIST,
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_DATA
} from "./actionTypes";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

const data = ["lee", "dell", "james"];

export const initListAction = () => ({
  type: INIT_LIST_DATA,
  data: data
});

export const getInitList = () => ({
  type: GET_INIT_LIST
});

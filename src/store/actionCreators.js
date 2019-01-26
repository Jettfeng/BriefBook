import {
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
export const initListAction = (data) => ({
  type: INIT_LIST_DATA,
  data
});

export const getTodoList = () => {
  return dispatch => {
    const action = initListAction(data);
    dispatch(action);
    // axios.get("").then(res => {
    //   const action = initListAction();
    //   store.dispatch(action);
    // });
  };
};

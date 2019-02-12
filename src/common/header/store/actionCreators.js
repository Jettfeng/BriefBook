import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

const changelist = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data), //header/store/defaultState中的defaultState为immutable对象，这里的data为defaultState中的一个数组，最好也为immutable对象
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispatch(changelist(data.data));
        console.log(data);
      })
      .catch(error => {
        console.log("error");
      });
  };
};

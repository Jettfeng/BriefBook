import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const changelist = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data) //header/store/defaultState中的defaultState为immutable对象，这里的data为defaultState中的一个数组，最好也为immutable对象
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

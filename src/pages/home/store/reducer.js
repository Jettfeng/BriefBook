// import * as constants from "./constants";
import { fromJS } from "immutable";
// fromJS:把js对象转换为immutable对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_home_data":
      console.log(action.topicList);
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });

    default:
      return state;
  }
};

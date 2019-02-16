// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as HomeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
// redux-immutable
const reducer = combineReducers({
  header: headerReducer,
  home: HomeReducer,
  detail: detailReducer
});

export default reducer;

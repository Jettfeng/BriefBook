import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";

function* getInitList() {
  // 异步逻辑
  try {
    const res = ["lee", "dell", "james"];
    const action = initListAction(res);
    yield put(action);
  } catch (e) {
    console.log("xxx接口请求失败");
  }
}

function* todosSagas() {
  // 捕捉到GET_INIT_LIST，执行fetchUser这个方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todosSagas;

// import * as constants from "./constants";
import { fromJS } from "immutable";
// fromJS:把js对象转换为immutable对象
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 2,
      title: "社会热点",
      imgUrl:
        "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "title",
      desc: "desc",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/15381228-5bb50cc6785796c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "title",
      desc: "desc",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/15381228-5bb50cc6785796c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      title: "title",
      desc: "desc",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/15381228-5bb50cc6785796c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

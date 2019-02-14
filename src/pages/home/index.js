import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData();
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
}
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
    // axios.get("/api/home.json").then(res => {
    //   const result = res.data.data;
    //   const action = {
    //     type: "change_home_data",
    //     topicList: result.topicList,
    //     articleList: result.articleList,
    //     recommendList: result.recommendList
    //   };
    //   dispatch(action);
    // });
  }
});
export default connect(
  null,
  mapDispatch
)(Home);

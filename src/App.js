import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store";
// -------------------------------------------------------
import { GlobalStyle } from "./style.js";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";
// -----------------------------------------------------------
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <IconFontGlobalStyle />
          <Header />
        </Fragment>
      </Provider>
    );
  }
}

export default App;

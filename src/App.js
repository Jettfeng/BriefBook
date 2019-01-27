import React, { Component, Fragment } from "react";
import Header from "./common/header";
// -------------------------------------------------------
import { GlobalStyle } from "./style.js";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";
import axios from "axios";
// -----------------------------------------------------------
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFontGlobalStyle />
        <Header />
        <div className="dell">hello word</div>
      </Fragment>
    );
  }
}

export default App;

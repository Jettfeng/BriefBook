import React, { Component, Fragment } from "react";
import Header from "./common/header";
// -------------------------------------------------------
import { GlobalStyle } from "./style.js";
import axios from "axios";
// -----------------------------------------------------------
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <div className="dell">hello word</div>
      </Fragment>
    );
  }
}

export default App;

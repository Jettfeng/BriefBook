import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import store from "./store";
// -------------------------------------------------------
import { GlobalStyle } from "./style.js";
import { IconFontGlobalStyle } from "./statics/iconfont/iconfont";

// -----------------------------------------------------------
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconFontGlobalStyle />
          <Header />
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

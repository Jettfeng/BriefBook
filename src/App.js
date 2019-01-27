import React, { Component,Fragment } from "react";
import { GlobalStyle } from "./style.js";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("/list").then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div className="dell">hello word</div>
      </Fragment>
    );
  }
}

export default App;

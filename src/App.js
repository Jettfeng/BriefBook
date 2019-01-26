import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: ['item']
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleAddItem() {
    this.setState(prevState => {
      return { list: [...prevState.list, "item"] };
    });
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                key={index}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = "blue";
                }}
                appear={true}
              >
                <div key={index}>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={el => {
            el.style.color = "blue";
          }}
          appear={true}
        >
          <div>App</div>
        </CSSTransition> */}
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }
}

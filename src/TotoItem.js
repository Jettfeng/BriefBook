import React, { Component } from "react";
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
  render() {
    return <div onClick={this.handleClick}>{this.props.content}</div>;
  }
}

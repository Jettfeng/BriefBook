import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
    console.log(e.target.value);
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  // 删除
  handleItemDelete(index) {
    // immutable
    // state不允许我们做任何的改变，只能修改拷贝后的副本
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;

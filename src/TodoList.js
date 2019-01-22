import React, { Component, Fragment } from "react";
import TodoItem from "./TotoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  }
  handleInputChange(e) {
    const value = e.target.value;
    // this.setState为异步，所以value必须在外面定义，否则报错
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({ inputValue: e.target.value });
    // console.log(e.target.value);
  }
  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
  }
  // 删除
  handleItemDelete(index) {
    // immutable
    // state不允许我们做任何的改变，只能修改拷贝后的副本
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({ list });
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;

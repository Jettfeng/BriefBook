import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  componentWillReceiveProps() {
    // 一个组件要从父组件接收参数
    // 只要父组件的render函数重新执行了，子组件的这个生命周期就会被执行
    // 如果这个组件第一次存在于父组件中，该生命周期不会执行
    console.log("componentWillReceiveProps");
  }
  render() {
    const { content } = this.props;
    return <div onClick={this.handleClick}>{content}</div>;
  }
}
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), //如果没传值，就不会进行检测
  deleteItem: PropTypes.func,
  index: PropTypes.number
};
// 设置默认值
TodoItem.defaultProps = {
  content: "hello word"
};
export default TodoItem;

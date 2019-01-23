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
  shouldComponentUpdate(nextProps, nextState) {
    // 对比数据
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("child render");

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

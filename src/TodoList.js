import React, { Component } from "react";
import { connect } from "react-redux";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleInputChange(e) {
    console.log(e.target.value);
  }
  handleClick() {}
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            placeholder="xxxx"
            onChange={this.props.changeInputValue}
          />
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          <li>item</li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
// store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = { type: "change_input_value", value: e.target.value };
      console.log(e.target.value);
      dispatch(action)
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

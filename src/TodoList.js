import React, { Component } from "react";
import { connect } from "react-redux";
class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state = store.getState();
    this.state = {};
  }
  handleChange() {}
  render() {
    return (
      <div>
        <div>
          <input placeholder="xxxx" onChange={this.handleChange} />
          <button>提交</button>
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
    state: state
  };
};
export default connect(mapStateToProps)(TodoList);

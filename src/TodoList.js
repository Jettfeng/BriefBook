import React, { Component } from "react";
import { connect } from "react-redux";

const TodoList = props => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleClick,
    handleDelete
  } = props;
  return (
    <div>
      <div>
        <input
          value={inputValue}
          placeholder="xxxx"
          onChange={changeInputValue}
        />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              handleDelete(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const {
//       inputValue,
//       list,
//       changeInputValue,
//       handleClick,
//       handleDelete
//     } = this.props;
//     return (
//       <div>
//         <div>
//           <input
//             value={inputValue}
//             placeholder="xxxx"
//             onChange={changeInputValue}
//           />
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {list.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => {
//                 handleDelete(index);
//               }}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
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
      dispatch(action);
    },
    handleClick() {
      const action = { type: "add_item" };
      dispatch(action);
    },
    handleDelete(index) {
      const action = { type: "delete_item", index };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

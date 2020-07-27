import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    return (
      <div>
        <button>Edit</button>
        <button onClick={this.handleClick}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;

import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleClick() {
    this.props.deleteTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
              id={this.props.id}
            />
            <button>Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i class="fas fa-pen" />
            </button>
            <button onClick={this.handleClick}>
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;

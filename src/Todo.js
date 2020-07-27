import React, { Component } from "react";

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

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleUpdate}>
          <input
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            id={this.props.id}
          />
          <button>Update</button>
        </form>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleClick}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }

    return result;
  }
}

export default Todo;

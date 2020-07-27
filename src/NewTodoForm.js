import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { task: "" };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          id="task"
          name="task"
          placeholder="New Todo"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;

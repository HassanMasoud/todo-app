import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ task: "Walk the dog" }, { task: "Feed the fish" }],
    };
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>TodoList</h1>
        <NewTodoForm />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;

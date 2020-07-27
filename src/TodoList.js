import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  delete(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          deleteTodo={this.delete}
          updateTodo={this.update}
        />
      );
    });
    return (
      <div>
        <h1>TodoList</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;

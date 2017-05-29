import React, { Component } from 'react';
import ReactDom from 'react-dom';

// dummy DB
let id = 0;
const dummyData = [
  { id: id++, task: "Make app not static", completed: false },
  { id: id++, task: "Finish curriculum", completed: true },
  { id: id++, task: "Teach snot-nosed kids to code", completed: false }
];

class Todo extends Component {
  render() {
    return (
      <li>
        <button onClick={() => this.props.removeTodo()}>X</button>
        <span onClick={() => this.props.toggleTodo()}>
          {this.props.completed ? <strike> {this.props.task}</strike> : this.props.task}
        </span>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              toggleTodo={() => this.props.toggleTodo(index)}
              removeTodo={() => this.props.removeTodo(index)}
            >
            </Todo>
          ))
        }
      </ul>
    )
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: dummyData };
  }

  toggleTodo(index) {
    // change DB
    dummyData[index].completed = !dummyData[index].completed;
    // setState out of DB
    this.setState({ todos: dummyData });
  }

  addTodo(task) {
    // add to DB
    dummyData.push({ id: id++, task: task, completed: false });
    // setState out of DB
    this.setState({ todos: dummyData });
  }

  removeTodo(index) {
    // remove from DB
    dummyData.splice(index, 1);
    // setState out of DB
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <div>
        <InputLine
          addTodo={(task) => this.addTodo(task)}
        />
        <TodoList
          todos={dummyData}
          toggleTodo={(index) => this.toggleTodo(index)}
          removeTodo={(index) => this.removeTodo(index)}
        />
      </div>
    );
  }
}

class InputLine extends Component {
  constructor(props) {
    super(props);

    this.state = { task: '' };
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit() {
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="task"
          onChange={(event) => this.handleChange(event)}
          value={this.state.task}
        />
        <button onClick={() => this.handleSubmit()}>Add Todo</button>
      </div>
    )
  }
}

ReactDom.render(<TodoApp />, document.getElementById('root'));

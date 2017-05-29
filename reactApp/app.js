import React, { Component } from 'react';
import ReactDom from 'react-dom';

// dummy DB
const dummyData = [
  { task: "Make app not static", completed: false },
  { task: "Finish curriculum", completed: true },
  { task: "Teach snot-nosed kids to code", completed: false }
];

class Todo extends Component {
  render() {
    return (
      <li>
        <button>X</button>
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
          this.props.todos.map((x, i) => (
            <Todo
              task={x.task}
              completed={x.completed}
              toggleTodo={() => this.props.toggleTodo(i)}
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
    dummyData.push({ task: task, completed: false });
    // setState out of DB
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <div>
        <InputLine addTodo={(task) => this.addTodo(task)}/>
        <TodoList todos={dummyData} toggleTodo={(index) => this.toggleTodo(index)}/>
      </div>
    );
  }
}

class InputLine extends Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <button>Add Todo</button>
      </div>
    )
  }
}

ReactDom.render(<TodoApp />, document.getElementById('root'));

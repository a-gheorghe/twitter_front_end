import React, { Component } from 'react';
import ReactDom from 'react-dom';

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
        {(this.props.completed ? (<strike> {this.props.task}</strike>) : (<span> {this.props.task}</span>))}
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>{this.props.todos.map(x => <Todo task={x.task} completed={x.completed}></Todo>)}</ul>
    )
  }
}

class TodoApp extends Component {
  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={dummyData}/>
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

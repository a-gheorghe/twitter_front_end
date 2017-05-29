import React, { Component } from 'react';
import ReactDom from 'react-dom';

const dummyData = [
  "Make app not static",
  "Finish curriculum",
  "Teach snot-nosed kids to code"
]

class Todo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li>
        <button>X</button>
        <span> {this.props.task}</span>
      </li>
    );
  }
}

class TodoList extends Component {

  render() {
    return (
      <ul>{this.props.todos.map(x => <Todo task={x}></Todo>)}</ul>
    )
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

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

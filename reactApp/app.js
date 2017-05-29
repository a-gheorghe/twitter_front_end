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
      <li>{this.props.task}</li>
    );
  }
}

class TodoList extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <ul>{dummyData.map(x => <Todo task={x}></Todo>)}</ul>
    )
  }
}

ReactDom.render(<TodoList />, document.getElementById('root'));

var React = require('react');
var InputLine = require('./InputLine');
var TodoList = require('./TodoList');

// dummy DB
// id is only there for unique keys - dismisses warning
let id = 0;
const dummyData = [
  { id: id++, task: "Make app not static", completed: false },
  { id: id++, task: "Finish curriculum", completed: true },
  { id: id++, task: "Teach snot-nosed kids to code", completed: false }
];

class TodoApp extends React.Component {
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
    //add to DB
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

module.exports = TodoApp;

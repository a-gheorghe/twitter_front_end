var React = require('react');
var Todo = require('./Todo');

class TodoList extends React.Component {
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

module.exports = TodoList;

var React = require('react');

class Todo extends React.Component {
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

module.exports = Todo;

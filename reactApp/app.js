import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Todo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <p>Can you see me now?</p>
    )
  }
}

ReactDom.render(<Todo />, document.getElementById('root'));

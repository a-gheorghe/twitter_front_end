var React = require('react');

class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      charRemaining: 140
    };
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
      charRemaining: 140-event.target.value.length
      });
  }

  handleSubmit() {
    this.props.addMessage(this.state.content)
    this.setState({ content: '' });
  }



  render() {
    return (
      <div className="input-div">
        <textarea
          className="input-box"
          type="text"
          rows ="5"
          cols="80"
          placeholder="Type 140 characters"
          onChange={(event) => this.handleChange(event)}
          value={this.state.content}
        /><br/>
        <button onClick={() => this.handleSubmit()}>Post!</button>
        <div>Characters remaining: {this.state.charRemaining}</div>
      </div>
    )
  }
}

module.exports = InputBox;

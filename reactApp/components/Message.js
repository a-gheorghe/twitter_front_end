var React = require('react');
var InputBox = require ('./InputBox')


class Message extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      whiteBackground: true

    }
  }

  toggleBackground(){
    this.setState({whiteBackground: !this.state.whiteBackground})
  }



  render() {
    return (
      <div className = {this.state.whiteBackground ? "message-box": "highlighted-message-box"} onClick={() => this.toggleBackground()}>
        <button onClick = {(event) => this.props.deleteMessage(event)}> Delete </button>
          {this.props.content}
      </div>
    );
  }
}

module.exports = Message;

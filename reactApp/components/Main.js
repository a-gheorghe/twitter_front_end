var React = require('react');
var InputBox = require ('./InputBox')
var Message = require ('./Message')
var Header = require ('./Header')

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: ['apple', 'banana', 'cantaloupe']

    }
  }

addToMessages(input){
  var newMessages = this.state.messages.slice()
  newMessages.unshift(input)
  this.setState({messages: newMessages})
}

deleteFromMessages(event, i){
  event.stopPropagation()
  var newMessages = this.state.messages.slice()
  newMessages.splice(i, 1)
  this.setState({messages: newMessages})
}

  render() {
    return (
      <div className="main-page">
        <Header />
        <InputBox addMessage = {(input) => this.addToMessages(input)}/>
        {/* <InputBox addMessage = {this.addToMessages.bind(this)} */}

        {this.state.messages.map((item, i) => <Message key={item} content={item} deleteMessage = {(event) => this.deleteFromMessages(event,i)} />)}
      </div>
    );
  }
}

module.exports = Main;

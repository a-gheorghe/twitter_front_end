var React = require('react');
var ReactDom = require('react-dom');
var TodoApp = require('./components/TodoApp');

ReactDom.render(<TodoApp />, document.getElementById('root'));

//var mongoose = require('mongoose');

// mongoose.connect('mongodb://graham:dbpass@ds163738.mlab.com:63738/barereacttodos');
//
// var todoSchema = new mongoose.Schema({
//   task: { type: String, required: true },
//   completed: { type: Boolean, default: false }
// });
// var TodoItem = mongoose.model('Todo', todoSchema);
//

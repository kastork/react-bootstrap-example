/** @jsx React.DOM */

// show that lessify works okay

require('./styles.less');


var jQuery = require('jquery');
window.$ = jQuery;

var React = require('react');

// Next line (Button declaration) causes error.
// comment it out and the React app works
var Button = require('react-bootstrap/Button');

// After commenting above line, uncomment next line
// to see different error.
// var Grid = require('react-bootstrap').Grid;

var pkg = require('./package.json');

React.renderComponent(
	<div>
	<div className='jumbotron'>

	{pkg.name}, brought to you by React!

	</div>
	<Button bsStyle="primary" bsSize="large">Large button</Button>
	</div>,
 document.body);

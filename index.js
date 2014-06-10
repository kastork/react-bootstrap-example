/** @jsx React.DOM */
var React = require('react/react-with-addons');

// Next line (Button declaration) causes error.
// comment it out and the React app works
// var Button = require('react-bootstrap/Button');

// After commenting above line, uncomment next line
// to see different error.
// var Grid = require('react-bootstrap').Grid;

var pkg = require('./package.json');

React.renderComponent(<h1>{pkg.name}, brought to you by React!</h1>, document.body);

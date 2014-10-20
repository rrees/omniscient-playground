var component = require('omniscient'),
    React = require('react');

var Hello = component(function () {
  return React.DOM.h1({}, 'Hello, Omniscient!');
});

React.renderComponent(Hello(), document.getElementById('target'));
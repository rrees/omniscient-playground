var component = require('omniscient'),
    React = require('react'),
    immstruct = require('immstruct');

var Hello = component(function () {
  return React.DOM.h1({}, 'Hello, Omniscient!');
});

var NameInput = component(function(props) {
	var onChange = function(e) {
		props.cursor.update('name', function(name) {
			return e.currentTarget.value;
		});
	};
	return React.DOM.input({
		value: props.cursor.get('name'),
		onChange: onChange
	});
});

var Greeter = component(function(props) {
	var cursor = props.cursor;

	var guest = cursor.get('guest');
	var name = guest.get('name') ? ", " + guest.get('name') : "";

	return React.DOM.section({},
		React.DOM.div({}, cursor.get('greeting'), name, "!"),
		React.DOM.div({}, NameInput(guest)));
});

React.renderComponent(Hello(), document.getElementById('target'));

var structure = immstruct({greeting: 'Greetings', guest: {name: ''}});

render();
structure.on('next-animation-frame', render);

function render () {
	React.render(Greeter(structure.cursor()), document.getElementById('greeting-panel'));
};


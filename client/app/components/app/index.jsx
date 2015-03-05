var React = require('react');
var AppHeader = require('./header');

var App = React.createClass({

	render: function() {
		return (
			<div id="application">
				<AppHeader title="Styuff and stuff" />
			</div>
		);
	}

});

module.exports = App;
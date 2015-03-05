var React = require('react'), 
	App = require('./components/app'),
	app = React.createElement(App, window.APP_DATA);
React.render(app, document.getElementById("content"));
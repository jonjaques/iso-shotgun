/// <reference path="../../typings/tsd.d.ts" />
import React = require('react'); 
import app = require('./components/app/index');


declare var window: app.AppWindow;
var appEl = React.createElement(app.AppComponent, window.APP_DATA);
React.render(appEl, document.getElementById("content"));
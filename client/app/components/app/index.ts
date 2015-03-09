/// <reference path="../../../../typings/tsd.d.ts" />
import TypedReact = require('typed-react');
import React = require('react');
var _react_ref = React.DOM.data();


import AppHeader = require('./header');
import AppFooter = require('./footer');

export interface AppWindow {
	APP_DATA: AppProps;
}

export interface AppProps {
    title: string;
}

export interface AppState {}

class App extends TypedReact.Component<AppProps, AppState> {

	private on: boolean;

	changeStuff() {
		this.on = !this.on;
		this.setProps({ title: this.on ? 'on' : 'off' });
	}

    render() {
    	return (
			<div className="app-container">
				<AppHeader title={this.props.title} />
					<button type= "text" onClick= {this.changeStuff}>Change Stuff</button>
				<AppFooter />
			</div>
		);
	}
}

export var AppComponent = TypedReact.createClass(App);

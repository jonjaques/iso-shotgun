/// <reference path="../../../../typings/tsd.d.ts" />
import TypedReact = require('typed-react');
import React = require('react');
var _react_ref = React.DOM.data();

interface AppProps {
    title: string;
}

class Header extends TypedReact.Component<AppProps, {}> {
    render() {
		return (
			<div className="app-header">
				<h1>{this.props.title}</h1>
			</div>
		);
	}

}

var component = TypedReact.createClass(Header);
export = component;
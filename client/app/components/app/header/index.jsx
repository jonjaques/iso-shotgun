var React = require('react');

class Header {

	getInitialState() {
		return { title: this.props.title };
	}

	componentDidMount() {
		this.setState({ title: 'loaded' });
	}

	render() {
		return (
			<div className="app-header">
				<h1>{this.state.title}</h1>
				{this.props.children}
			</div>
		)
	}

}

module.exports = React.createClass(Header.prototype);
BlogLayout = React.createClass({
	render() {
		return <paper-header-panel className="fit layout vertical">
			<div className="paper-header">
			<div className="navigation">

			<a href="/">Home</a>
			</div>
			<h1> My Blog </h1>

			</div>
			<div className="fit">
			{this.props.content}
		</div>

			</paper-header-panel>;
	}
});

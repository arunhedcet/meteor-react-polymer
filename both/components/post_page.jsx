PostPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		var handle = Meteor.subscribe('singlePost', this.props._id);
		var data = {};
		if(handle.ready()) {
			data.post = Posts.findOne({_id: this.props._id});
		}

		return data;
	},
	getContent() {
		return <div>
			<neon-animated-pages className="fit" selected="1" id="main_page">

			<neon-animatable className="layout vertical">
			<div className="center-justified horizontal layout">
			<div className="li">
			<iron-selector attr-for-selected="item" id="selection_list" multi selectable="inbox-item" selected-attribute="selected">

			<a href="/">Back</a>
			<contact-card starred>
			<img src="/img/profile.jpg" alt="Eric's photo"></img>
			<h3>{this.data.post.title}</h3>
			<p>{this.data.post.content}</p>
			</contact-card>       
			</iron-selector>

			</div>
			</div>
			</neon-animatable>
			</neon-animated-pages>


			</div>;
	},
	render() {
		return (this.data.post)? this.getContent() : <div>loading...</div>;
	}
});

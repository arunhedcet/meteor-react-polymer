PostList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var selector = {category: {$ne: "private"}};
    var handle = Meteor.subscribe('posts', selector);
    var data = {};
    if(handle.ready()) {
      data.posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    }
 
    return data;
  },
  getList() {
    return <ul>
      {this.data.posts.map(function(task) {
        var path = FlowRouter.path('post', {_id: task._id})
        return <li key={task._id}><a href={path}>{task.title}</a></li>
      })}
    </ul>;
  },
  render() {
			console.log(this.data.posts,this.getMeteorData());
    return <div>
      This is the post list
   <neon-animated-pages className="fit" selected="1" id="main_page">

			<neon-animatable className="layout vertical">
			<div className="center-justified horizontal layout">
			<contact-card starred>
      {(this.data.posts)? this.getList() : "loading..."}
			</contact-card>       
			</div>
			</neon-animatable>
			</neon-animated-pages>
		</div>;

  }
});

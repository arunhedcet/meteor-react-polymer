Posts = new Meteor.Collection('posts');
if(Meteor.isServer) {
  Posts.remove({});
  Posts.insert({
    _id: 'one', title: 'Meteor flow router sample 1', content: 'sdfsd fd fsdf sf dfsfsd'
  });
  Posts.insert({_id: 'two', title: 'Sample title 2', content: 'adkajhdjsbd asdasbdxm asdjsa dsada dsdajkn'});
  Posts.insert({_id: 'three', title: 'Secret', category: 'private'});
}

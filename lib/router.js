Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  // waitOn: function () {
  //   return Meteor.subscribe('posts');
  // }
});

Router.route('/', {
  name: 'home'  
});

Router.route('/chat/:_id', function () {
  if (ChatRooms.find(this.params._id).count() > 0) {
    var messages = Messages.find({'chatRoom': this.params._id});
    this.render('chatRoom', {data: messages});
  } else {
    this.render('chatNotFound');
  }
});

Router.onBeforeAction('dataNotFound', { only: 'chatRoom' });

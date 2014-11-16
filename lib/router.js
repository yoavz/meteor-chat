Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe('ChatRooms');
  }
});

Router.route('/', {
  name: 'home'  
});

Router.route('/about', {
  name: 'about'
});

Router.route('/chat/:_id', {
  name: 'chatRoom',
  data: function() { 
    return {
      room: ChatRooms.findOne(this.params._id),
      messages: Messages.find({'roomId': this.params._id})
    }
  }, 
  onBeforeAction: function () {
    if (ChatRooms.find(this.params._id).count() > 0)
      this.next();
    else 
      this.render('chatNotFound'); 
  },
  waitOn: function () {
    return Meteor.subscribe('ChatMessages', this.params._id)
  }
});

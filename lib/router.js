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

// Router.route('/login', {
// });

ChatRoomController = RouteController.extend({
  template: 'chatRoom',
  findOptions: function () {
    return {
      sort: { createdAt: -1, id: -1 },
    }
  },
  data: function() { 
    var chatRoom = ChatRooms.findOne(this.params._id);
    // reverse to put most recent at the bottom
    var chatMessages = Messages.find({'roomId': this.params._id}, this.findOptions()).fetch().reverse();
    return {
      room: chatRoom,
      rawMessages: chatMessages 
    }
  }, 
  onBeforeAction: function () {
    if (ChatRooms.find(this.params._id).count() > 0)
      this.next();
    else 
      this.render('chatNotFound'); 
  },
  waitOn: function () {
    return Meteor.subscribe('ChatMessages', this.params._id);
  }
});

Router.route('/chat/:_id', {
  name: 'chatRoom',
});

// Schema
//
// {
//  _id:
// }

ChatRooms = new Mongo.Collection('chatrooms');

Meteor.methods({
  createChatRoom: function() {
    return {
      _id: ChatRooms.insert({})
    }
  }
});

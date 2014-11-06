ChatRooms = new Mongo.Collection('chatrooms');

ChatRooms.allow({
  update: function() {
    return true;
  }
});

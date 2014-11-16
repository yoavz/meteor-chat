Meteor.publish('ChatRooms', function () {
  return ChatRooms.find()
});

Meteor.publish('ChatMessages', function (roomId) {
  return Messages.find({roomId: roomId});
});

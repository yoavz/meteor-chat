Meteor.publish('ChatRooms', function () {
  return ChatRooms.find()
});

Meteor.publish('ChatMessages', function (roomId) {
  check(roomId, String);
  
  options = {
    // always sort by newest post
    sort: { createdAt: -1, id: -1 },
    limit: 500
  }
  return Messages.find({roomId: roomId});
});

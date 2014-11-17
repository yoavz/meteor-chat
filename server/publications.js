Meteor.publish('ChatRooms', function () {
  return ChatRooms.find()
});

Meteor.publish('ChatMessages', function (roomId, limit) {
  check(roomId, String);
  check(limit, Number);
  if (limit < 0)
    limit = 10;
  // hard limit on 1000 messages per client to not kill server
  if (limit > 1000)
    limit = 1000;
  
  options = {
    // always sort by newest post
    sort: { createdAt: -1, id: -1 },
    limit: limit
  }
  return Messages.find({roomId: roomId});
});

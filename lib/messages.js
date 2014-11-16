// Schema:
// {
//  _id:
//  userId:
//  author:
//  roomId:
//  body:
//  createdAt:
// }

Messages = new Mongo.Collection('messages')

Messages.allow({
  insert: function() {
    return true;
  }
});

Meteor.methods({
  submitMessage: function (messageAttributes) {
    // user is logged in
    // check(Meteor.userId(), String); 

    // validate post attributes
    check(messageAttributes, {
      roomId: String,
      body: String
    });

    // deny if body is too long
    if (messageAttributes.body.length > 50)
      throw Meteor.error("Message is too long");

    var user = Meteor.user();
    _.extend(messageAttributes, {
      // userId: user._id,
      // author: user.username,
      createdAt: new Date(),
    });
    
    var messageId = Messages.insert(messageAttributes);

    return {
      _id: messageId
    }
  }
});

validateMessage = function (message) {
}

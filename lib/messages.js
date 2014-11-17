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

    // validate post attributes
    check(messageAttributes, {
      roomId: String,
      body: String,
      icon: String
    });

    errors = validateMessage(messageAttributes);
    if (!_.isEmpty(errors)) {
      console.log(errors);
      throw new Meteor.Error("invalid");
    }

    var user = Meteor.user();
    _.extend(messageAttributes, {
      createdAt: new Date(),
    });
    
    var messageId = Messages.insert(messageAttributes);

    return {
      _id: messageId
    }
  }
});

validateMessage = function (message) {
  errors = {}

  if (message.body.length === 0)
    errors.body = "Message body cannot be empty"
  else if (message.body.length > 50)
    errors.body = "Message body cannot be too long"

  if (! validateIcon(message.icon))
    errors.icon = "Invalid icon name"

  return errors;
}

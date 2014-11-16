Template.chatRoom.events({
  "click #submitMessage": function (e) {
    e.preventDefault();
    
    var $body = $("#submit-group input").val();
    
    //TODO: proper error
    if ($body.length === 0 || $body.length > 50)
      return console.log("too short or long");

    messageAttributes = {
      roomId: this.room._id,
      body: $body,
    }

    Meteor.call("submitMessage", messageAttributes, function (error, res) {
      // TODO: reasonable error system 
      if (error)
        return console.log(error);
    });
  }  
});
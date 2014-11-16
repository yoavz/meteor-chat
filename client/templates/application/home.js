Template.home.events({
  'click #makeChat': function (e) {
    Meteor.call("createChatRoom", function (error, result) {
      if (error)
        return alert("Error creating the chat room");
      
      console.log(result);

      Router.go('chatRoom', {_id: result._id});
    });
  }
});

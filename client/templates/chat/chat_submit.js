Template.chatSubmit.helpers({
  icon: function () {
    if (! Session.get("icon-name"))
      Session.set("icon-name", DEFAULT_ICON);
    return ICONS_MAP[Session.get("icon-name")]
  },
  
  allIcons: function () {
    return _.values(ICONS_MAP);  
  },

});

Template.chatSubmit.events({
  "submit .message-form": function (e) {
    e.preventDefault();
    
    var $body = $("#submit-group input")
    
    //TODO: proper error
    if ($body.length === 0 || $body.length > 50)
      return console.log("too short or long");

    messageAttributes = {
      roomId: this.room._id,
      icon: Session.get("icon-name"),
      body: $body.val(),
    }

    Meteor.call("submitMessage", messageAttributes, function (error, res) {
      // TODO: reasonable error system 
      if (error)
        return console.log(error);

      // clear the textbox
      $body.val("");
    });
  },

  "click .dropdown-menu a": function (e) {
    e.preventDefault();
    var new_icon = $(e.target).attr('value');
    console.log(new_icon);
    Session.set("icon-name", new_icon);
  }
});
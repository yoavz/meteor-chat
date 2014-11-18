MESSAGE_HEIGHT = 45;
MESSAGE_NUM = 10;

Template.chatRoom.rendered = function () {
  // on load, we should scroll to the bottom
  scrollToBottom();
} 

Template.chatRoom.helpers({
  messages: function () {
    var messages = this.rawMessages;
  
    //if there's less messages, push some empty ones
    while (messages.length < MESSAGE_NUM) {
      messages.unshift({empty: true, body: "p"});
    }

    // keep scrolling to the bottom
    setTimeout(50, function () {
      scrollToBottom();
    });

    return messages;
  },

  height: function () {
    return MESSAGE_HEIGHT * MESSAGE_NUM;
  },

  empty: function () {
    return (this.rawMessages.length === 0);
  },

  emptyMessage: function () {
    var options = [
      "Say something!",
      "What's the best thing about this video?",
      "What's the worst thing about this video?",
      "Hello... anybody?",
      "I can't stand this silence, somebody say something!"
    ]
    return options[Math.floor(Math.random()*options.length)];
  }
});

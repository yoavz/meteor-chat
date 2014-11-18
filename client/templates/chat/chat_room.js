MESSAGE_NUM = 10;
MESSAGE_HEIGHT = 45;
CHAT_HEIGHT = 2*10 + MESSAGE_HEIGHT * (MESSAGE_NUM+1)

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

    // wait for 100ms to load messages into DOM
    // then, scroll to the bottom 
      setTimeout(function () {
        scrollToBottom();
      }, 100);

    return messages;
  },

  height: function () {
    return CHAT_HEIGHT;
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

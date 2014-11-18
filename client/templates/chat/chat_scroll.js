
// Scrolls chat-messages to the bottom
scrollToBottom = function () {
  var $container = $(".chat-messages");
  if ($container[0])
    $container[0].scrollTop = $container[0].scrollHeight - CHAT_HEIGHT;
}

// Returns true if the chat-messages is all the way scrolled down 
scrollAtBottom = function () {
  var $container = $(".chat-messages");
  var buffer = 200;
  return $container[0] && 
        ($container[0].scrollTop > ($container[0].scrollHeight - CHAT_HEIGHT));
}

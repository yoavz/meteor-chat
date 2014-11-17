pluralize = function(thing, amount) {
  return amount.toString() + " " + thing + (amount === 1 ? "" : "s") + " ago";
}

Template.chatMessage.helpers({
  prettyTime: function () {
    var now = new Date();
    // difference is in milliseconds
    var difference = now - this.createdAt;

    // under one min
    if (difference < (1000*60)) {
      return "Just now"
    } else if (difference < (1000*60*60)) {
      return pluralize("minute", Math.floor(difference/(1000*60)));
    } else if (difference < (1000*60*60*24)) {
      return pluralize("hour", Math.floor(difference/(1000*60*60)));
    } else {
      return "More than a day ago";
    }

    return difference;
  },

  classes: function () {
    return this.empty ? "hidden" : "";
  },
  
  iconObject: function () {
    return ICONS_MAP[this.icon];
  }
});

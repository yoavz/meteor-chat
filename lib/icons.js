iconInit = function(name, x, y, w, h) {
  return {
    x: x,
    y: y,
    width: 33,
    height: 33,
    name: name
  }
}

ICONS_MAP = {
  bulbasaur: iconInit("bulbasaur", -28, -30),
  charizard: iconInit("charizard", -318, -29),
}

DEFAULT_ICON = "bulbasaur"

validateIcon = function(icon) {
  return _.contains(_.keys(ICONS_MAP), icon); 
}


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
  nidoran: iconInit("nidoran", -28, -124),
  jigglypuff: iconInit("jigglypuff", -704, -126),
  pidgey: iconInit("pidgey", -1471, -27),
};

randomIcon = function () {
  return randomElement(_.keys(ICONS_MAP));
}

validateIcon = function(icon) {
  return _.contains(_.keys(ICONS_MAP), icon); 
}


// returns a random element from a list
randomElement = function (list) {
  if (list.length > 0)
    return list[Math.floor(Math.random()*list.length)];
  else
    return null;
}

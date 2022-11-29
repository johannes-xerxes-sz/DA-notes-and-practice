//leetcode
var numberOfSteps = function(num) {
  var i = 0
  while (num !== 0) {
    if (num === 0) {
      return i;
    }
    if (num % 2 === 0) {
      num = num / 2;
      i++
      continue;
    }
    num = num - 1;
    i++;
  }
  return i
};

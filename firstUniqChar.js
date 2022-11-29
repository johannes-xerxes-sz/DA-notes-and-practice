var firstUniqChar = function(s) {
  if (s.length === 1) {
      return 0
  }

  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (j === i && j !== s.length - 1) {
        continue;
      }
      if (s[j] === s[i] && i !== j) {
        break;
      }
      if (j === s.length - 1) {
        return i
      }
    }
  }

  return -1
};

//solution with hash map
var firstUniqChar = function(s) {
  var store = {};

  if (s.length === 0) {
    return -1;
  }
  if (s.length === 1) {
    return 0;
  }

  for (letter of s) {
    if (store[letter]) {
      store[letter] ++
    }
    if (!store[letter]) {
      store[letter] = 1
    }
  }

  for (var i = 0; i < s.length; i++) {
    if (store[s[i]] === 1) {
      return i;
    }
    continue;
  }

  return -1;
};


console.log('"aabb" => -1', firstUniqChar("aabb") === -1)
console.log('"dddccdbba" => 8', firstUniqChar("dddccdbba") === 8)
console.log('"leetcode" => 0', firstUniqChar("leetcode") === 0)
console.log('"d" => 0', firstUniqChar("d") === 0)
console.log('"" => -1', firstUniqChar("") === -1)
